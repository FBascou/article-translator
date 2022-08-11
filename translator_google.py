import os
from googletrans import Translator

# Folder paths
folder_articles_kr_path = r"C:\Users\user\Documents\Practice\article-translator\articles-kr"
folder_articles_en_path = r"C:\Users\user\Documents\Practice\article-translator\articles-en"
folder_newsletters_en_path = r"C:\Users\user\Documents\Practice\article-translator\newsletters-en"

# Change directory
os.chdir(folder_articles_kr_path)

#Call Google Translate
translator = Translator()
# Read and translate Korean texts to English
def read_text_file(file_path):
    # Open file
    with open(file_path, 'r', encoding='UTF8') as file:
        # Read file
        contents = file.read()
        # Translate file
        translation = translator.translate(contents, dest='en')
        return translation.text

count = 0
# Iterate through all the files in "artciles-kr" folder
for file in os.listdir():
    # Check whether file is in text format or not
    if file.endswith(".txt"):
        file_path = f"{folder_articles_kr_path}\{file}"
        # Call read text file function
        translated_text = read_text_file(file_path)
        print(f"{file} has been translated")
        # Count number of files in folder
        count = count + 1
        # Change directory to "articles-en"
        os.chdir(folder_articles_en_path)
        # Open new .txt file
        with open(f'article_en_{count}.txt', 'w') as item:
            # Add translated text to the new file
            item.write(translated_text)
            print(f"{item.name} has been created")






    
    
