import type { MigrationInterface, QueryRunner } from "typeorm";

export class AddGroup1744297091149 implements MigrationInterface {
  name = "AddGroup1744297091149";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "group" RENAME COLUMN "deleted_by" TO "deleted"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "group" RENAME COLUMN "deleted" TO "deleted_by"`,
    );
  }
}
