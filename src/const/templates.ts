type TLang = 'en' | 'ru'
type TField = {
  name: string
  text: string
}
type TTemplates = Record<TLang, TField>[]

export const textTemplates: TTemplates = [
  {
    en: {
      name: 'None',
      text: '',
    },
    ru: {
      name: 'Нет',
      text: '',
    },
  },
  {
    en: {
      name: 'Happy birthday 1',
      text: 'Count your life by smiles, not tears.\nCount your age by friends, not years.\nHappy birthday!',
    },
    ru: {
      name: 'С днём рожденья 1',
      text: 'Считайте свою жизнь улыбками, а не слезами.\nСчитайте свой возраст по друзьям, а не по годам.\nС днем ​​рождения!',
    },
  },
  {
    en: {
      name: 'Happy birthday 2',
      text: 'Happy birthday!\nI hope all your birthday wishes and dreams come true.',
    },
    ru: {
      name: 'С днём рожденья 2',
      text: 'С днем ​​рождения!\nЯ надеюсь, что все твои пожелания и мечты в день рождения сбудутся.',
    },
  },
  {
    en: {
      name: 'Happy birthday 3',
      text: 'Another adventure filled year awaits you.\nWelcome it by celebrating your birthday with pomp and splendor.\nWishing you a very happy and fun-filled birthday!',
    },
    ru: {
      name: 'С днём рожденья 3',
      text: 'Тебя ждет еще один год, полный приключений.\nВстречай его, отмечая свой день рождения с пышностью и великолепием.\nЖелаю тебе счастливого и веселого дня рождения!',
    },
  },
  {
    en: {
      name: 'Happy birthday 4',
      text: 'May the joy that you have spread in the past come back to you on this day.\nWishing you a very happy birthday!',
    },
    ru: {
      name: 'С днём рожденья 4',
      text: 'Пусть радость, которую вы дарили в прошлом, вернется к вам в этот день.\nЖелаю тебе счастливого дня рождения!',
    },
  },
  {
    en: {
      name: 'Happy birthday 5',
      text: 'This birthday, I wish you abundant happiness and love.\nMay all your dreams turn into reality and may lady luck visit your home today.\nHappy birthday to one of the sweetest people I’ve ever known!',
    },
    ru: {
      name: 'С днём рожденья 5',
      text: 'В этот день рождения я желаю тебе огромного счастья и любви.\nПусть все твои мечты станут реальностью и пусть удача сегодня посетит твой дом.\nС днем рождения, одного из самых милых людей, из всех кого я знаю!',
    },
  },
]
