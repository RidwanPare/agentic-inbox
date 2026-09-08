const fs = require('fs');

function translateFile(filePath, translations) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [en, fr] of translations) {
    content = content.replace(new RegExp(en, 'g'), fr);
  }
  fs.writeFileSync(filePath, content);
}

translateFile('app/routes/mailbox.tsx', [
  ['"Inbox"', '"Boîte de réception"'],
  ['"Sent"', '"Envoyés"'],
  ['"Drafts"', '"Brouillons"'],
  ['"Archive"', '"Archives"'],
  ['"Trash"', '"Corbeille"'],
  ['"Folders"', '"Dossiers"'],
  ['"Spam"', '"Spam"'],
  ['"Compose"', '"Nouveau message"'],
  ['"Search emails..."', '"Rechercher des emails..."'],
  ['"Mailboxes"', '"Boîtes de réception"'],
  ['"Agent"', '"Assistant"'],
  ['"Email Agent"', '"Assistant Koora"'],
]);
