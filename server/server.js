const шлях = вимагати ('шлях');
const express = вимагати ('express');
const app = express ();
const publicPath = path.join (__ dirname, '..', 'public');
const port = process.env.PORT || 3000;
app.use (express.static (publicPath));
app.get ('*', (req, res) => {
   res.sendFile (path.join (publicPath, 'index.html'));
});
app.listen (port, () => {
   console.log ('Сервер працює!');
});
