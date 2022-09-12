import app from "./app";

const PORT = process.env.PORT || 5050;

app.listen(PORT, (): void => console.log(`Server is running on PORT ${PORT}`));