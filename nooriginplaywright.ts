import { test, expect } from "playwright/test";

test('seleciona apenas o destino e tenta buscar', async ({ page }) => {

    //pagina inicial
    await page.goto('https://queropassagem.com.br/', 
    { waitUntil: 'domcontentloaded', timeout: 60000 });

    //preenche o campo de destino
    const destinoInput = page.locator('input[name="destino_str"]');
    await destinoInput.focus({ timeout: 60000 }); 
    await destinoInput.fill('Natal');

    //preciona o tab para fechar o autocomplete e espera para o site preocessar
    await page.keyboard.press('Tab', { delay: 6000 });

    //seleciona a primeira data disponivel
    const dataClicavel = page.locator('a.ui-state-default').first();
    await dataClicavel.click({ timeout: 60000 });

    //clica em buscar
    const buscarButton = page.locator('#Pesquisar');
    await buscarButton.click({ timeout: 60000 }); 

    //verifica se a mensagem de erro foi exibida
    const erroModal = page.locator('text=Selecione uma origem e um destino para realizar a busca.');
    await expect(erroModal).toBeVisible({ timeout: 60000 });
});
