---
title: Goodbye World!
date: 2022-12-13
tags: Python
---

### (This is just a testing markdown blog.)

### Android Studio
#### Fix: Simulator start failed
Open text editor (eg. notepad)
Type this code:
```
Vulkan=off
GLDirectMem=on
```
Save the file as "advancedFeatures.ini" in .android directory. If your user is named Admin, under windows it would be: C:\Users\Admin.android\advancedFeatures.ini.

Run your app.

### WSL Install NPM
```
- sudo apt-get install curl
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
- ปิด terminal แล้วเปิดใหม่
- nvm install --lts
```

#### First-time setup
```
First-time setup

Install NPM
- sudo apt-get install curl
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
- ปิด terminal แล้วเปิดใหม่
- nvm install --lts

1) git clone

2) cd ProjectFolder

3) sudo chown -R $(whoami) .

4) docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs

5) ./vendor/bin/sail up -d

6) ./vendor/bin/sail artisan key:generate

7) ./vendor/bin/sail artisan config:cache

8) npm install

9) npm run dev

10) ./vendor/bin/sail artisan migrate

-------------------------------------------------------------------------------
Run

1) ./vendor/bin/sail up -d

2) npm run dev


```