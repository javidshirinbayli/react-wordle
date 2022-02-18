export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Lieliski pastrādāts!', 'Lieliski!', 'Teicami!']
export const GAME_COPIED_MESSAGE = 'Spēle ir kopēta starpliktuvē.'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Nepietiek burtu'
export const WORD_NOT_FOUND_MESSAGE = 'Vārds nav atrasts'
export const HARD_MODE_ALERT_MESSAGE =
  'Grūto režīmu var iespējot tikai sākumā!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Vārds bija ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `${guess} ir jāizmanto ${position}. pozīcijā`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Minējumā jāiekļauj ${letter}`
export const ENTER_TEXT = 'Ievadīt'
export const DELETE_TEXT = 'Dzēst'
export const STATISTICS_TITLE = 'Statistika'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'Jauns vārds pēc'
export const SHARE_TEXT = 'Dalīties'
export const TOTAL_TRIES_TEXT = 'Kopējais mēģinājumu skaits'
export const SUCCESS_RATE_TEXT = 'Panākumu līmenis'
export const CURRENT_STREAK_TEXT = 'Secīgi atminēto vārdu skaits'
export const BEST_STREAK_TEXT = 'Labakais secīgi atminēto vārdu skaits'
