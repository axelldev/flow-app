CREATE TABLE `flow_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`flow_id` integer NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`icon` text,
	`color` text,
	`is_active` integer DEFAULT false NOT NULL,
	`is_done` integer DEFAULT false NOT NULL,
	`active_time_ms` integer DEFAULT 0 NOT NULL,
	`started_at` integer,
	`created_at` integer DEFAULT (unixepoch('now')*1000),
	`updated_at` integer DEFAULT (unixepoch('now')*1000),
	FOREIGN KEY (`flow_id`) REFERENCES `flows`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `flows` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`icon` text,
	`color` text,
	`created_at` integer DEFAULT (unixepoch('now')*1000),
	`updated_at` integer DEFAULT (unixepoch('now')*1000)
);
