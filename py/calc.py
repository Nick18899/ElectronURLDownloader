import requests
import os
from sys import argv



def calc(audio_id):
    REQUEST_STATUS_CODE = 200
    name_dir = 'music_vk'
    dir = '/home/alexander/Music/'  # enter here the name of directory, where you want to put files
    path = dir + name_dir
    if not os.path.exists(path):
        os.makedirs(path)
    os.chdir(path)
    r = requests.get(audio_id)
    if r.status_code == REQUEST_STATUS_CODE:
        with open("1" + '.mp3', 'wb') as output_file:
            output_file.write(r.content)


if __name__ == '__main__':
    calc(argv[1])
