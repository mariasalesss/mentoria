import { test, expect } from "playwright/test";

test('o usuário faz login com sucesso', async ({ page }) => {

    //pagina inicial
    await page.goto('https://queropassagem.com.br/', 
    { waitUntil: 'domcontentloaded', timeout: 60000 });

    //clica no botão de entrar pra fazer login
    await page.locator('button:has-text("ENTRAR")').first().click();

    //verifica o titulo do site
    await expect(page).toHaveTitle(/QueroPassagem/);

    //preenche o email
    const emailLocator = page.locator('input[name="log_email"]');
    await emailLocator.fill('amoravicentinagata@gmail.com', { timeout: 60000 });

    //prenche senha
    const passwordLocator = page.locator('input[name="log_acesso"]'); 
    await passwordLocator.fill('Amoravicentina@123', { timeout: 60000 });

    //clica no botão para fazer login
    const continueButtonLocator = page.locator('button:has-text("CONTINUAR COM EMAIL")'); 
    await continueButtonLocator.click();

});
