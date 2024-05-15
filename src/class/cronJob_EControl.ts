import cron from 'node-cron';
import puppeteer from 'puppeteer';

export class CronJobEControl {
  constructor(){}

  async visitUrl(url:string){
    // un cron que se ejecute cada minuto y haga un console.log()
    cron.schedule('* * * * *', async () => {

      console.log(`a las ${new Date()}, visito la url: ${url}`)
      
      const browser = await puppeteer.launch({
        headless: "shell",
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      
      const page = await browser.newPage();
      await page.goto(url);

      setTimeout(async () => {
        await browser.close();
      }, 1000 * 55)

    });
  }
}
