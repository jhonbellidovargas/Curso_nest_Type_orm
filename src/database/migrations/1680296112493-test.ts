import { MigrationInterface, QueryRunner } from 'typeorm';

export class test1680296112493 implements MigrationInterface {
  name = 'test1680296112493';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "createAt" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "updateAt" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" ALTER COLUMN "createAt" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" ALTER COLUMN "updateAt" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ALTER COLUMN "createAt" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ALTER COLUMN "updateAt" SET DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ALTER COLUMN "updateAt" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ALTER COLUMN "createAt" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" ALTER COLUMN "updateAt" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" ALTER COLUMN "createAt" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "updateAt" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "createAt" SET DEFAULT CURRENT_TIMESTAMP`,
    );
  }
}
