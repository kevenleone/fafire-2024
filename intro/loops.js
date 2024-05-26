const users = ['Keven', 'Jose', 'Maria', 'Antonio'];

const usuario = {
  name: 'Keven',
  email: 'kevenleone@qwe.com',
  city: 'Recife',
};

const languages = {
  es_ES: 'Spanish',
  en_US: 'English',
  pt_BR: 'Portuguese - Brasil',
  pt_PT: 'Portuguese - Portugal',
};

for (let i = 0; i < 10; i++) {
  console.log(`Executando... ${i}`);
}

for (let i = 0; i < users.length; i++) {
  console.log(`Usuario... ${users[i]}`);
}

for (const user of users) {
  console.log(`Usuario... ${user}`);
}

for (const language in languages) {
  if (language === 'en_US') {
    continue;
  }

  console.log(language, languages[language]);
}
