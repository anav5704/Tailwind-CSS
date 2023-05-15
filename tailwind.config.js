/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.{html,js}"],
    darkMode: 'class',
    theme: {
    extend: {
        colors: {
            anavBlue: '#38b6ff',
            anavGray: '#282a30',
            anavBlack: '#151515',
            anavWhite: '#ffffff4d',
        },
        fontFamily: {
            body: ['Poppins']
        },
        height: {
			"10v": "10vh",
			"20v": "20vh",
			"30v": "30vh",
			"40v": "40vh",
			"50v": "50vh",
			"60v": "60vh",
			"70v": "70vh",
			"80v": "80vh",
			"90v": "90vh",
			"100v": "100vh",
		},
    },
  },
  plugins: [],
}

