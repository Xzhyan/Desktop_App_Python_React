import webview

# core
from core import settings
from core.config import BASE_DIR


class App:
    def __init__(self):
        self.window = None

    def create_window(self):
        """Janela principal do desktop app e configurações"""
        
        self.window = webview.create_window(
            title=settings.APP_NAME,
            url=str(settings.VITE_REACT_URL),
            maximized=settings.MAXIMIZED
        )

    def startup(self):
        """Inicializa o app desktop"""

        self.create_window()
        webview.start(debug=settings.DEBUG)


if __name__ == '__main__':
    try:
        print(BASE_DIR)
        app = App()
        app.startup()
    
    except Exception as e:
        print(f'Erro: {e}')
