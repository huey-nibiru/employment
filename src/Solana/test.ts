import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { JobAgreement } from '../target/types/job_agreement';

describe('job_agreement', () => {
  const provider = anchor.Provider.local();
  anchor.setProvider(provider);

  const program = anchor.workspace.JobAgreement as Program<JobAgreement>;

  it('Initializes and completes a job', async () => {
    const jobAccount = anchor.web3.Keypair.generate();
    const user1 = provider.wallet.publicKey;
    const user2 = anchor.web3.Keypair.generate().publicKey;

    // Initialize the job
    await program.rpc.initializeJob(new anchor.BN(100), {
      accounts: {
        jobAccount: jobAccount.publicKey,
        user1: user1,
        user2: user2,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      signers: [jobAccount],
    });

    // Complete the job
    await program.rpc.completeJob({
      accounts: {
        jobAccount: jobAccount.publicKey,
        user1: user1,
        user2: user2,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
    });

    // Fetch the job account to verify completion
    const job = await program.account.jobAccount.fetch(jobAccount.publicKey);
    assert.ok(job.isComplete);
  });
});