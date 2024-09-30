import config from '../../config.cjs';

const restartBot = async (m) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === 'restart') {
    try {
      m.reply('nσvα prσcєssíng....')
     await process.exit()
    } catch (error) {
      console.error(error);
      await m.React("❌");
      return m.reply(`An error occurred while restarting the nσvα bot: ${error.message}`);
    }
  }
};

export default restartBot;
