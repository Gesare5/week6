const LoginPage = () => {
    const handleSubmit = (event) => {
        const formData = new FormData(event.target);
        event.preventDefault();
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
    }

    return (
        <div>
            <form onSubmit={
                handleSubmit
            }

            >
                <input type="text" name="username" placeholder="Email" />
                <input type="password" name="password"
                    placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>)
}
export default LoginPage;