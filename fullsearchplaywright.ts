import { test, expect } from "playwright/test";

test('busca com origem, destino e data', async ({ page }) => {

    //pagina inicial
    await page.goto('https://queropassagem.com.br/', 
    { waitUntil: 'domcontentloaded', timeout: 60000 });

    //preenche a origem e espera o autocomplete 
    const origemInput = page.locator('input[name="origem_str"]'); 
    await origemInput.focus({ timeout: 10000 });
    await origemInput.fill('São Paulo');
  
    //clica no resultado do autocomplete
    await page.locator('.tt-suggestion:has-text("São Paulo")').first().click({ timeout: 10000 });

    //preenche o destino e espera o autocomplete
    const destinoInput = page.locator('input[name="destino_str"]');
    await destinoInput.focus({ timeout: 10000 }); 
    await destinoInput.fill('Natal'); 
  
    //clica no resultado do autocomplete
    await page.locator('.tt-suggestion:has-text("Natal")').first().click({ timeout: 10000 });

    //seleciona a data
    const dataClicavel = page.locator('a.ui-state-default').first();
    await dataClicavel.click({ timeout: 10000, force: true });

    //clica no botão de buscar
    const buscarButton = page.locator('#Pesquisar');
    await buscarButton.click({ timeout: 10000 }); 

    //verifica se foi para a pagina certa de busca, ou seja, sucesso
    await expect(page).toHaveURL(/.*\/onibus\/.*/, { timeout: 60000 });
});
