import { envValidation } from "@/bootstrap/env.validation";
import { V2RayCollector } from "@/frameworks/scraper/scraper.framework";

async function main() {

   // const args = process.argv.slice(2);
   // const sort = args.includes('--sort');

   const envs = await envValidation();
   const collector = new V2RayCollector();
   await collector.main();
}


// Run if this file is executed directly
if (require.main === module) {
   main().catch(console.error);
}