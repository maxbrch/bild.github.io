# app.py

from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)

# Підключення до бази даних SQLite
conn = sqlite3.connect('comments.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, comment TEXT)''')
conn.commit()

@app.route('/')
def index():
    # Отримати всі коментарі з бази даних
    c.execute("SELECT * FROM comments")
    comments = c.fetchall()
    return render_template('index.html', comments=comments)

@app.route('/add_comment', methods=['POST'])
def add_comment():
    if request.method == 'POST':
        name = request.form['name']
        comment = request.form['comment']
        # Додати коментар до бази даних
        c.execute("INSERT INTO comments (name, comment) VALUES (?, ?)", (name, comment))
        conn.commit()
        return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
