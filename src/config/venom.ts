import * as venom from 'venom-bot';

let client: venom.Whatsapp; 

const initClient = async () => {
  if (client) {
    console.log('Venom client já inicializado.');
    return;
  }

  try {
    client = await venom.create(
      '704-chat',
      (base64Qr, asciiQr) => {
        console.log('Escaneie este QR Code no WhatsApp:');
        console.log(asciiQr);
      },
      undefined,
      {
        headless: 'new',
        disableSpins: true,
        logQR: true,
        folderNameToken: 'tokens',
        mkdirFolderToken: './',
      }
    );
    console.log('WhatsApp conectado!');
  } catch (error) {
    console.error('Erro ao conectar ao WhatsApp:', error);
    throw error;
  }
};

const sendImage = async (to: string, imagePath: string, caption?: string) => {
  try {
    const client = getClient();
    await client.sendImage(to, imagePath, 'image', caption || '');
    console.log(`Imagem enviada com sucesso para ${to}`);
  } catch (error) {
    console.error('Erro ao enviar a imagem:', error);
  }
};

const getClient = (): venom.Whatsapp => {
  if (!client) {
    throw new Error('Venom client não inicializado. Chame initClient primeiro.');
  }
  return client;
};

export { initClient, getClient };
