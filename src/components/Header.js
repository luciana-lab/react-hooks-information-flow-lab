// Create a Header component by refactoring the <header> element out of the App component.
// Pass a callback function as a prop called onDarkModeClick to the Header component
function Header({ onDarkModeClick, isDarkMode }) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header;