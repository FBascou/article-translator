import os
import urllib.request
import json
from datetime import datetime
from time import sleep

# Format date
today_date = datetime.now().strftime("%Y_%m_%d_%H_%M")

# Naver info
CLIENT_ID = 'vajbl979MnHEbTTVVTTo'
CLIENT_SECRET = '7WxhFcv3w8'
URL = "https://openapi.naver.com/v1/papago/n2mt"

# Folder paths
folder_articles_kr_path = r"C:\Users\user\Documents\Practice\article-translator\articles-kr"
folder_articles_en_path = r"C:\Users\user\Documents\Practice\article-translator\articles-en"
folder_newsletters_en_path = r"C:\Users\user\Documents\Practice\article-translator\newsletters-en"

# Change directory
os.chdir(folder_articles_kr_path)

# Access translation API
def translate(text):
    encText = urllib.parse.quote(text)
    data = "source=ko&target=en&text=" + encText

    request = urllib.request.Request(URL)
    request.add_header("X-Naver-Client-Id", CLIENT_ID)
    request.add_header("X-Naver-Client-Secret", CLIENT_SECRET)
    response = urllib.request.urlopen(request, data=data.encode("utf-8"))
    rescode = response.getcode()
    if rescode == 200:
        response_body = response.read().decode('utf-8')
        result_json = json.loads(response_body)
        result = result_json["message"]["result"]["translatedText"]
        print(result_json)
        return result
    elif rescode == 429:
        print("Error Code:" + int(rescode.headers["Retry-After"]))
        sleep(5)
    else:
        return print("Error Code:" + rescode)

# Read and translate Korean text file to English
def read_text_file(file_path):
    # Open file
    with open(file_path, 'r', encoding='UTF8') as file:
        # Read file
        contents = file.read()
        # Translate file
        translation = translate(contents)
        return translation

def translate_articles():
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
            with open(f'{today_date}_article_en_{count}.txt', 'w') as item:
                # Add translated text to the new file
                item.write(translated_text)
                print(f"{item.name} has been created")
            return count
        sleep(10)


#  Move KR articles that have been translated into new folder???