from tkinter import *
from tkinter import ttk
from translator_papago import *

translate_articles_count = translate_articles()
# count = 0
# def click_btn():
#     global count
#     count = count + 1

root = Tk()
root.title("Article Translator")
root.resizable(False, False)

frm = ttk.Frame(root, padding=40)
style = ttk.Style()
style.theme_use('default')
style.configure('TFrame', foreground="#fff", background="#282828")
style.configure('TLabel', foreground="#fff", background="#282828")
style.configure('TButton', foreground="#fff", background="#282828", relief="ridge")
frm.grid()
ttk.Label(frm, text="Click button to translate articles").grid(column=0, row=0)
ttk.Label(frm, text="Please make sure to have the articles on the 'articles-kr' folder").grid(column=0, row=1)
ttk.Button(frm, text="Translate", command=translate_articles).grid(column=0, row=2, pady= 40)
ttk.Label(frm, text=f"Total articles translated: {translate_articles_count}").grid(column=0, row=3)



root.mainloop()