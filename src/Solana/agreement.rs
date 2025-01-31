use anchor_lang::prelude::*;
use anchor_lang::solana_program::system_instruction;

declare_id!("YourProgramIDHere");

#[program]
pub mod job_agreement {
    use super::*;

    // Initialize the job agreement
    pub fn initialize_job(ctx: Context<InitializeJob>, amount: u64) -> ProgramResult {
        let job_account = &mut ctx.accounts.job_account;
        job_account.user1 = *ctx.accounts.user1.key;
        job_account.user2 = *ctx.accounts.user2.key;
        job_account.amount = amount;
        job_account.is_complete = false;
        Ok(())
    }

    // Mark the job as complete and release funds
    pub fn complete_job(ctx: Context<CompleteJob>) -> ProgramResult {
        let job_account = &mut ctx.accounts.job_account;

        // Ensure the job is not already marked as complete
        if job_account.is_complete {
            return Err(ProgramError::Custom(1)); // Custom error for already completed job
        }

        // Ensure user1 has enough funds
        let user1_balance = ctx.accounts.user1.lamports();
        if user1_balance < job_account.amount {
            return Err(ProgramError::Custom(2)); // Custom error for insufficient funds
        }

        // Transfer funds from user1 to user2
        let transfer_instruction = system_instruction::transfer(
            &ctx.accounts.user1.key(),
            &ctx.accounts.user2.key(),
            job_account.amount,
        );
        anchor_lang::solana_program::program::invoke(
            &transfer_instruction,
            &[
                ctx.accounts.user1.to_account_info(),
                ctx.accounts.user2.to_account_info(),
            ],
        )?;

        // Mark the job as complete
        job_account.is_complete = true;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeJob<'info> {
    #[account(init, payer = user1, space = 8 + 32 + 32 + 8 + 1)]
    pub job_account: Account<'info, JobAccount>,
    pub user1: Signer<'info>,
    pub user2: AccountInfo<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CompleteJob<'info> {
    #[account(mut)]
    pub job_account: Account<'info, JobAccount>,
    #[account(mut)]
    pub user1: Signer<'info>,
    #[account(mut)]
    pub user2: AccountInfo<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct JobAccount {
    pub user1: Pubkey,
    pub user2: Pubkey,
    pub amount: u64,
    pub is_complete: bool,
}