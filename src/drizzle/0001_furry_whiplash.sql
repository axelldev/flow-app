ALTER TABLE `flow_items` ADD `priority` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `flow_items` DROP COLUMN `icon`;--> statement-breakpoint
ALTER TABLE `flow_items` DROP COLUMN `color`;