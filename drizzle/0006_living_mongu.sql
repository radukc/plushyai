CREATE TABLE "generation" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"original_url" text NOT NULL,
	"generated_url" text NOT NULL,
	"style" text NOT NULL,
	"quality" text NOT NULL,
	"credits_cost" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "generation" ADD CONSTRAINT "generation_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "generation_user_id_idx" ON "generation" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "generation_created_at_idx" ON "generation" USING btree ("created_at");