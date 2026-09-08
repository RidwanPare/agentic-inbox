const fs = require('fs');

function translateFile(filePath, translations) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [en, fr] of translations) {
    content = content.replace(new RegExp(en, 'g'), fr);
  }
  fs.writeFileSync(filePath, content);
}

translateFile('app/components/ComposeEmail.tsx', [
  ['label="To"', 'label="À"'],
  ['label="Subject"', 'label="Objet"'],
  ['placeholder="recipient@example.com, another@example.com"', 'placeholder="destinataire@exemple.com"'],
  ['placeholder="Separate multiple addresses with commas"', 'placeholder="Séparez les adresses par des virgules"'],
  ['placeholder="Email subject"', 'placeholder="Objet du mail"'],
  ['"Message"', '"Message"'], // same
  ['"Discard"', '"Annuler"'],
  ['"Save Draft"', '"Enregistrer le brouillon"'],
  ['"Send"', '"Envoyer"'],
]);

translateFile('app/components/Header.tsx', [
  ['"Write an email"', '"Écrire un email"'],
  ['"Agent"', '"Assistant"'],
  ['"Settings"', '"Paramètres"'],
]);
