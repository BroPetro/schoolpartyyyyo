from flask import Flask, render_template
from datetime import datetime
import pytz

app = Flask(__name__)

@app.route('/')
def home():
    # Отримуємо поточний час у часовому поясі EEST (Східноєвропейський літній час)
    tz = pytz.timezone('Europe/Kyiv')
    current_time = datetime.now(tz).strftime('%H:%M:%S %d-%m-%Y')
    return render_template('index.html', time=current_time)

if __name__ == '__main__':
    app.run(debug=True)
