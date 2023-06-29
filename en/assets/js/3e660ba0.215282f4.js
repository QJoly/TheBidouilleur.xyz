"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9954],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=t(7462),a=(t(7294),t(4137)),o=t(3992),i=t(425);const l={title:"D\xe9couverte de MicroPython",slug:"decouverte-micropython"},s=void 0,u={permalink:"/TheBidouilleur.xyz/en/blog/decouverte-micropython",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2023-06-11-Decouverte-MicroPython/index.md",source:"@site/blog/2023-06-11-Decouverte-MicroPython/index.md",title:"D\xe9couverte de MicroPython",description:"Introduction",date:"2023-06-11T00:00:00.000Z",formattedDate:"June 11, 2023",tags:[],readingTime:11.01,hasTruncateMarker:!1,authors:[],frontMatter:{title:"D\xe9couverte de MicroPython",slug:"decouverte-micropython"},nextItem:{title:"IPFS - un protocole pour archiver et partager des fichiers",permalink:"/TheBidouilleur.xyz/en/blog/ipfs"}},c={authorsImageUrls:[]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation de notre environnement de d\xe9veloppement",id:"installation-de-notre-environnement-de-d\xe9veloppement",level:2},{value:"Installation de Thonny",id:"installation-de-thonny",level:3},{value:"Installation de MicroPython sur une carte RP2040/PICO",id:"installation-de-micropython-sur-une-carte-rp2040pico",level:3},{value:"D\xe9buter le d\xe9veloppement",id:"d\xe9buter-le-d\xe9veloppement",level:2},{value:"Hello-World",id:"hello-world",level:3},{value:"Se connecter \xe0 un r\xe9seau WiFi",id:"se-connecter-\xe0-un-r\xe9seau-wifi",level:3},{value:"Github_CI_Watchdog",id:"github_ci_watchdog",level:3},{value:"LED WS2812B",id:"led-ws2812b",level:3},{value:"Montage",id:"montage",level:4},{value:"Code",id:"code",level:4},{value:"Projet final : CLI Watchor",id:"projet-final--cli-watchor",level:2}],d={toc:p},m="wrapper";function h(e){let{components:n,...l}=e;return(0,a.kt)(m,(0,r.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"En suivant les derniers threads de ",(0,a.kt)("a",{parentName:"p",href:"https://blog.zwindler.fr/2023/06/16/revere-blinky-enix/"},"Denis Germain")," \xe0 propos du ",(0,a.kt)("a",{parentName:"p",href:"https://www.getblinky.io/"},"Blinky")," (Un gyrophare connect\xe9 compos\xe9 d'un ESP32 et de LEDs RGB adressables), j'ai eu l'inspiration pour reprendre le d\xe9veloppement sur carte."),(0,a.kt)("p",null,"J'ai beaucoup travaill\xe9 sur des cartes Arduino et ESP8266/ESP32, mais uniquement avec l'IDE Arduino. Avec l'arriv\xe9e de MicroPython et TinyGo, j'ai d\xe9cid\xe9 de me lancer dans l'aventure."),(0,a.kt)("h2",{id:"installation-de-notre-environnement-de-d\xe9veloppement"},"Installation de notre environnement de d\xe9veloppement"),(0,a.kt)("h3",{id:"installation-de-thonny"},"Installation de Thonny"),(0,a.kt)("p",null,"Voici les diff\xe9rentes m\xe9thodes d'installation de Thonny en fonction de votre syst\xe8me d'exploitation."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Linux",label:"Linux",default:!0,mdxType:"TabItem"},"Flatpak",(0,a.kt)("code",null,"flatpak install org.thonny.Thonny"),"Snap sudo snap install thonny Debian, ",(0,a.kt)("b",null,"Raspbian"),", ",(0,a.kt)("b",null,"Ubuntu"),", ",(0,a.kt)("b",null,"Mint")," and others sudo apt install thonny Fedora sudo dnf install thonny"),(0,a.kt)(i.Z,{value:"Python",label:"Python",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip3 install thonny\n"))),(0,a.kt)(i.Z,{value:"MacOS",label:"MacOS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install thonny\n")))),(0,a.kt)("h3",{id:"installation-de-micropython-sur-une-carte-rp2040pico"},"Installation de MicroPython sur une carte RP2040/PICO"),(0,a.kt)("p",null,"R\xe9cup\xe9rer le fichier UF2 sur le site de ",(0,a.kt)("a",{parentName:"p",href:"https://micropython.org/download/rp2-pico/"},"MicroPython")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wget https://micropython.org/download/rp2-pico/rp2-pico-latest.uf2")),(0,a.kt)("p",null,"D\xe8s le fichier d\xe9pos\xe9 sur la carte, celle-ci se red\xe9marre et est pr\xeate \xe0 l'emploi."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Installation de MicroPython",src:t(1337).Z,width:"879",height:"544"})),(0,a.kt)("p",null,"Il suffira d'ouvrir Thonny et de s\xe9lectionner la carte RP2040/PICO disponible dans la liste des p\xe9riph\xe9riques."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MicroPython",src:t(460).Z,width:"1071",height:"535"})),(0,a.kt)("p",null,"Et histoire de tester notre installation, nous allons taper quelques lignes de code dans la console REPL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'print("Hello World")\nHello World\n')),(0,a.kt)("p",null,'Et \xe9crire notre premier "Hello-World" dans un fichier ',(0,a.kt)("inlineCode",{parentName:"p"},"main.py")," qui sera ex\xe9cut\xe9 au d\xe9marrage de la carte."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hello-World",src:t(6400).Z,width:"633",height:"528"})),(0,a.kt)("h2",{id:"d\xe9buter-le-d\xe9veloppement"},"D\xe9buter le d\xe9veloppement"),(0,a.kt)("h3",{id:"hello-world"},"Hello-World"),(0,a.kt)("p",null,"Carte connect\xe9e, environnement de d\xe9veloppement install\xe9, il est temps de commencer \xe0 d\xe9velopper. On va \xe9crire 'Hello World' sur la console REPL et faire clignoter la LED verte de la carte."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from machine import Pin\nimport time\n\nled = Pin("LED", Pin.OUT)\n\nwhile True:\n    led.on()\n    time.sleep(1)\n    led.off()\n    time.sleep(1)\n')),(0,a.kt)("h3",{id:"se-connecter-\xe0-un-r\xe9seau-wifi"},"Se connecter \xe0 un r\xe9seau WiFi"),(0,a.kt)("p",null,"C'est bien beau de faire clignoter une LED, mais si on veut faire des choses un peu plus int\xe9ressantes, il va ajouter un moyen de communiquer avec la carte. Pour cela, on va connecter la carte \xe0 un r\xe9seau WiFi."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import time, network, urequests\nfrom machine import Pin\n\nssid = 'MON_SSID'\npassword = \"MA_PASSPHRASE\"\n\ndef connect():\n    wlan = network.WLAN(network.STA_IF)\n    wlan.active(True)\n    wlan.connect(ssid, password)\n     \n    max_wait = 10\n    while max_wait > 0:\n        if wlan.status() < 0 or wlan.status() >= 3:\n            break\n        max_wait -= 1\n        print('waiting for connection...')\n        time.sleep(1)\n \n    # Handle connection error\n    if wlan.status() != 3:\n        raise RuntimeError('network connection failed')\n    else:\n        status = wlan.ifconfig()\n        print( 'ip = ' + status[0] )\nif __name__ == \"__main__\":\n    connect()\n    while True:\n        time.sleep(1)\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connecter la carte \xe0 un r\xe9seau WiFi",src:t(4046).Z,width:"938",height:"190"})),(0,a.kt)("p",null,"Victoire ! Notre carte est connect\xe9e \xe0 notre r\xe9seau WiFi. On va maintenant pouvoir faire des requ\xeates HTTP ou \xe0 l'inverse, recevoir des requ\xeates HTTP."),(0,a.kt)("h3",{id:"github_ci_watchdog"},"Github_CI_Watchdog"),(0,a.kt)("p",null,"Eh oui, il est temps de commencer un r\xe9el projet. Je souhaite d\xe9velopper un petit outil qui va me permettre de surveiller les builds de mes projets sur Github, sachant que mon blog utilise Docusaurus et que le temps de build est vraiment tr\xe8s long (plus de 10 minutes)."),(0,a.kt)("p",null,"D\xe8s qu'un article est termin\xe9, je le pousse sur Github et je lance le build. Il arrive que mes fichiers Markdown ne soient pas corrects et que le build \xe9choue. Je dois donc relancer le build et attendre \xe0 nouveau 10 minutes."),(0,a.kt)("p",null,"C'est pour cela que je souhaite avoir un signal visuel du statut de mon build pour le relancer si besoin."),(0,a.kt)("p",null,"Pour ce faire, j'ai d\xe9velopp\xe9 un petit code qui va directement interroger l'API de Github et r\xe9cup\xe9rer le statut du dernier build."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import urequests as requests\n\ndef get_latest_workflow_status(owner, repo):\n    url = f"https://api.github.com/repos/{owner}/{repo}/actions/workflows"\n    headers = {"User-Agent": "qjoly"}\n    response = requests.get(url, headers=headers)\n    if response.status_code == 200:\n        workflows = response.json()["workflows"]\n        if workflows:\n            latest_workflow = workflows[0]\n            latest_workflow_id = latest_workflow["id"]\n            workflow_runs_url = f"https://api.github.com/repos/{owner}/{repo}/actions/workflows/{latest_workflow_id}/runs"\n            response = requests.get(workflow_runs_url, headers=headers)\n            if response.status_code == 200:\n                workflow_runs = response.json()["workflow_runs"]\n                if workflow_runs:\n                    latest_workflow_status = workflow_runs[0]["status"]\n                    return latest_workflow_id, latest_workflow_status\n                else:\n                    return None, "No workflow runs found."\n            else:\n                return None, f"Failed to retrieve workflow runs: {response.text}"\n    else:\n        return None, f"Failed to retrieve workflows: {response.text}"\n\nowner = "qjoly"\nrepo = "thebidouilleur.xyz"\n\nworkflow_id, workflow_status = get_latest_workflow_status(owner, repo)\nif workflow_id:\n    print(f"Latest workflow ID: {workflow_id}")\n    print(f"Latest workflow status: {workflow_status}")\nelse:\n    print(f"Failed to retrieve workflow status: {workflow_status}")\n\n')),(0,a.kt)("p",null,"Je lance depuis mon poste de travail le script et j'obtiens le r\xe9sultat suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Latest workflow ID: 53015235\nLatest workflow status: completed\n")),(0,a.kt)("p",null,"G\xe9nial ! Plus qu'\xe0 l'envoyer sur la carte et\u2026"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Memory Error",src:t(921).Z,width:"624",height:"176"})),(0,a.kt)("p",null,"Oups, il semblerait que le script soit trop lourd pour la carte. Je pense que la r\xe9ponse de l'API est trop importante pour \xeatre trait\xe9e par la carte. Je vais donc devoir trouver une autre solution."),(0,a.kt)("p",null,"Bon bah.. ",(0,a.kt)("strong",{parentName:"p"},"Plan B"),", je vais utiliser un tier pour faire le traitement et envoyer le r\xe9sultat \xe0 la carte."),(0,a.kt)("p",null,"Mais avant \xe7a, je ne vais pas me contenter de la petite LED de la carte, j'ai envie de quelque chose de plus visuel. Je vais donc utiliser un ruban de LED WS2812B."),(0,a.kt)("h3",{id:"led-ws2812b"},"LED WS2812B"),(0,a.kt)("h4",{id:"montage"},"Montage"),(0,a.kt)("p",null,"J'ai ce ruban de LED depuis un moment, mais je n'ai jamais pris le temps de l'utiliser. C'est l'occasion de le faire. L'avantage de ce ruban, c'est qu'il est adressable. On peut donc contr\xf4ler chaque LED individuellement via une seule broche de la carte."),(0,a.kt)("p",null,"\xe0 l'inverse d'un ESP32 qui peut sortir du 5v sur ses PINs, le PICO ne peut sortir que du 3.3v. Ma solution est donc de brancher le ruban sur une alimentation externe. (Comme celle qui va alimenter la carte Pico qui est en 5v)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sch\xe9ma Montage",src:t(7880).Z,width:"1335",height:"685"})),(0,a.kt)("p",null,"J'ai branch\xe9 la pin DATA du ruban LED sur la pin 13 de ma Pico."),(0,a.kt)("h4",{id:"code"},"Code"),(0,a.kt)("p",null,"Maintenant que le montage physique est fait, il faut \xe9crire le code pour contr\xf4ler le ruban de LED."),(0,a.kt)("p",null,"Sur GitHub, j'ai trouv\xe9 un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"neopixel.py")," me permettant de contr\xf4ler le ruban de LED. Je n'ai pas r\xe9ussi \xe0 trouver l'URL du fichier sur GitHub ",(0,a.kt)("em",{parentName:"p"},"(Je modifierai l'article si je le trouve)")),(0,a.kt)("p",null,"Ainsi, j'ai pu \xe9crire le code suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import time\nfrom neopixel import Neopixel\n\nnumpix = 20\ndatapin = 13\npixels = Neopixel(numpix, 0, datapin, "GRB")\n\n# COULEURS\nyellow = (255, 100, 0)\norange = (255, 50, 0)\ngreen = (0, 255, 0)\nblue = (0, 0, 255)\nred = (255, 0, 0)\n\n# LUMINOSIT\xc9 PAR DEFAULT\nbrightness = 100\npixels.brightness(brightness)\n\n\nfrom machine import Pin\nled = Pin("LED", Pin.OUT)\n\ndef success_animation():\n    for i in range(0,5):\n        led.on()\n        time.sleep(0.1)\n        led.off()\n        time.sleep(0.1)\n    blink_color(green, 0.001, 1)\n    led.off()\n    \ndef fail_animation():\n    for i in range(0,2):\n         led.on()\n         time.sleep(0.5)\n         led.off()\n         time.sleep(0.5)\n    blink_color(red, 0.01, 2)\n    led.off()\n    \ndef blink_color(color, speed, n):\n    pixels.fill((0,0,0))\n    pixels.brightness(0)\n    pixels.show()\n    blink_time = n\n    for blink in range(blink_time) :\n        for i in range(brightness):\n            pixels.fill(color)\n            pixels.brightness(i)\n            time.sleep(speed)        \n            pixels.show()\n        \n        for i in range(brightness, -1, -1):\n            pixels.fill(color)\n            pixels.brightness(i)\n            time.sleep(speed)        \n            pixels.show()\n    pixels.fill((0,0,0))\n    pixels.show()\n\ndef loading(color, speed):\n    pixels.brightness(brightness)\n    for i in range(0,numpix):\n        pixels.set_pixel(i,color)\n        if i != 0:\n            pixels.set_pixel(i-1, (0,0,0))\n        pixels.show()\n        time.sleep(speed)\n    pixels.set_pixel(numpix-1, (0,0,0))\n    pixels.show()\n')),(0,a.kt)("p",null,"\xc0 retenir\xa0: la variable ",(0,a.kt)("inlineCode",{parentName:"p"},"numpix")," correspond au nombre de LED sur le ruban. Ici, j'en ai 20 et la variable ",(0,a.kt)("inlineCode",{parentName:"p"},"datapin")," correspond \xe0 la pin DATA du ruban de LED. (13 dans mon cas)\nC'est important de le souligner puisque c'est la seule modification que vous devrez faire pour adapter le code \xe0 votre montage."),(0,a.kt)("p",null,"Nous avons notre montage physique, nous avons nos animations \u2026 On commence \xe0 \xeatre pas mal !"),(0,a.kt)("h2",{id:"projet-final--cli-watchor"},"Projet final : CLI Watchor"),(0,a.kt)("p",null,"Le projet initial \xe9tait de surveiller mes CIs Github depuis ma carte Pico et d'afficher une animation de succ\xe8s si le build est r\xe9ussi et une animation d'\xe9chec si le build est en \xe9chec. Mais comme ma Pico n'est pas capable de faire le traitement n\xe9cessaire, \xe7a sera mon poste local qui va faire le traitement et envoyer le lancement d'une animation \xe0 la carte."),(0,a.kt)("p",null,"Donc quite \xe0 faire un programme sur mon poste qui va surveiller un statut, autant faire un programme qui va surveiller n'importe quelle commande et lancer une animation en fonction du r\xe9sultat. Ainsi, je peux surveiller une compilation sur mon poste, le r\xe9sultat d'un playbook Ansible, le r\xe9sultat d'un test unitaire, etc."),(0,a.kt)("p",null,"Voil\xe0 comment je vais organiser mon programme :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Algorithme",src:t(2208).Z,width:"351",height:"432"})),(0,a.kt)("p",null,"Je tiens \xe0 ce que la carte Pico n'ait pas besoin d'\xeatre connect\xe9 \xe0 l'ordinateur lan\xe7ant la commande. J'ai alors cr\xe9\xe9 un petit programme permettant d'avoir un serveur WEB sur la carte Pico."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import usocket as socket\nimport animations\nimport re\nfrom wifi_connect import check_if_connected\n\nWEB_SERVER_PORT=8080\n\ndef generate_index(conn):\n    conn.send(\'HTTP/1.1 200 OK\\n\')\n    conn.send(\'Content-Type: text/html\\n\')\n    conn.send(\'Connection: close\\n\\n\')\n    html = """\n    <b>examples:</b> <br>\n    <a href="/animation=fail"> Fail animation </a>\n    <a href="/animation=success"> Success animation </a>\n    <a href="/animation=loading?speed=0.1?color=purple"> Loading animation </a>\n"""\n    conn.sendall(html)\n    conn.close()\n    return html\n\ndef response_200(conn, message):\n    """\n    Sends an HTTP 200 response to the specified connection with the provided message.\n\n    :param conn: A socket object representing the connection to send the response to.\n    :type conn: socket.socket\n    :param message: The message to include in the response body.\n    :type message: bytes\n    :return: None\n    """\n    conn.send(\'HTTP/1.1 200 OK\\n\')\n    conn.send(\'Content-Type: text/html\\n\')\n    conn.send(\'Connection: close\\n\\n\')\n    conn.sendall(message)\n    conn.close()\n    return\n\ndef request_animation(conn, path):\n    """\n    This function handles requests for different animations. It takes in two parameters:\n    `conn`: a socket object representing the connection to the client.\n    `path`: a string representing the path of the requested animation.\n\n    If `path` contains the string "success", it triggers the `success_animation()` function and returns "OK".\n    If `path` contains the string "fail", it triggers the `fail_animation()` function and returns "OK".\n    If `path` contains the string "loading", it parses any query parameters for `speed` and `color`, \n        and uses their values to trigger the `loading()` function with those parameters. \n        If `color` is not found in the `rainbow_colors` dictionary, it defaults to (255, 50, 0).\n        If `speed` is not passed, it defaults to 0.01.\n        Returns "OK" after sending a 200 response.\n\n    If `path` does not contain any of the above strings, it sends a 404 response and returns "NOK".\n\n    This function has no explicit return type, but returns strings "OK" or "NOK".\n    """\n    if "success" in path:\n        animations.success_animation()\n        response_200(conn, "Success animation")\n        return "OK"\n    elif "fail" in path:\n        animations.fail_animation()\n        response_200(conn, "Fail animation")\n        return "OK"\n    \n    elif "loading" in path:\n        color = None\n        speed = None\n        params = path.split("?")\n        for param in params:\n            if param.startswith("speed="):\n                speed = param.split("=")[1]\n            elif param.startswith("color="):\n                color = param.split("=")[1]\n        \n        print("Speed : ", speed)\n        print("Color : ", color)\n        \n        rainbow_colors = {\n            "red": (255, 0, 0),\n            "orange": (255, 165, 0),\n            "yellow": (255, 255, 0),\n            "green": (0, 128, 0),\n            "blue": (0, 0, 255),\n            "indigo": (75, 0, 130),\n            "violet": (238, 130, 238)\n        }\n        \n        if color in rainbow_colors:\n            print("Color", color, "exists in the dictionary.")\n            color = rainbow_colors[color]\n        else:\n            print("Color", color, "does not exist in the dictionary.")\n            color = (255, 50, 0)\n            \n        if speed is None:\n            speed = 0.01\n            \n        print("Speed:", speed)\n        print("Color:", color)\n\n        animations.loading(color,float(speed))\n        conn.send(\'HTTP/1.1 200 OK\\n\')\n        conn.send(\'Content-Type: text/html\\n\')\n        conn.send(\'Connection: close\\n\\n\')\n        conn.sendall("200 OK")\n        conn.close()\n        print("Fin animation loading")\n        return "OK"\n        \n    else:\n        conn.send(\'HTTP/1.1 404 OK\\n\')\n        conn.send(\'Content-Type: text/html\\n\')\n        conn.send(\'Connection: close\\n\\n\')\n        conn.sendall("NOK")\n        print("Animation not found")\n        return "NOK"\n    \ndef run_webserver():\n    """\n    Runs a web server which listens to incoming connections on port 8082. \n    Receives requests and generates responses based on the requested path. \n    If the path is "/animation=", generates an animation response. \n    If the path is "/", "/index.html", or "/index.php", generates an index response. \n    Otherwise, generates a 404 response. \n    Does not return any values.\n    """\n    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    s.bind((\'\', WEB_SERVER_PORT))\n    s.listen(5)\n\n    while True:\n        if not check_if_connected():\n            print("Not connected")\n        response = None\n        conn, addr = s.accept()\n        print(\'Got a connection from %s\' % str(addr))\n        request = conn.recv(1024)\n        request = request.decode(\'utf-8\')\n        print(\'Content = %s\' % request)\n        \n        if len(request.split(\' \')) > 2:\n            path = request.split(\' \')[1]\n        else:\n            path = \'/\'\n            \n        print("Path : %s" % path)\n        \n        if "/animation=" in path:\n            print("Animation requested")\n            response = request_animation(conn, path)\n            \n        if response is None and path in [\'/\',\'/index.html\', \'/index.php\']:\n            response = generate_index(conn)\n            \n        if response is None:\n            conn.send(\'HTTP/1.1 404 OK\\n\')\n            conn.send(\'Content-Type: text/html\\n\')\n            conn.send(\'Connection: close\\n\\n\')\n            conn.sendall("404 not found")\n        print("end")\n    print("end of all")\n    conn.close()\n')),(0,a.kt)("p",null,"J'admets que le code est un peu brouillon, mais il fonctionne. Il faut juste faire attention \xe0 bien mettre les bonnes valeurs dans les param\xe8tres de la requ\xeate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  ~ curl http://192.168.1.124:8080/animation\\=success\nSuccess animation\n")),(0,a.kt)("p",null,"Le ruban Led s'allume en vert, c'est parfait !"),(0,a.kt)("p",null,"Pour que la Pico soit au courant du statut d'une commande, j'ai \xe9crit un petit script Bash qui va prendre en param\xe8tre une commande et envoyer les requ\xeates au serveur web du Pico."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\nif [ -z "$IP_MCP" ]; then\n    echo "Error: IP_MCP variable is empty or unset"\n    exit 1\nfi\n\nanimation() {\n  animation="$1"\n  color="$2"\n  speed="$3"\n  curl -q -s "http://$IP_MCP/animation=${animation}?speed=${speed}?color=${color}" >/dev/null\n}\ncommand="$@"\n$command &\ncommand_pid=$!\nwhile ps -p $command_pid >/dev/null; do\n    animation "loading" "yellow" "0.05"\ndone\n\nwait $command_pid\nexit_code=$?\n\nif [[ $exit_code -ne 0 ]]; then\n        animation fail\nelse\n        animation success\nfi\n\necho "Command has completed."\n')),(0,a.kt)("p",null,"Si je lance ",(0,a.kt)("inlineCode",{parentName:"p"},"./watch_status docker-compose up --build -d"),", le ruban LED va afficher l'animation 'en cours' jusqu'\xe0 ce que la commande se termine. Si la commande se termine avec un code d'erreur, le ruban led affiche l'animation '\xe9chec', sinon il affiche l'animation 'succ\xe8s'."),(0,a.kt)("p",null,"Exemple avec ",(0,a.kt)("inlineCode",{parentName:"p"},"./watch_status sleep 5")," puis ",(0,a.kt)("inlineCode",{parentName:"p"},"./watch_status ls /existe_pas")," pour montrer les animations."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diff\xe9rentes animations",src:t(6139).Z,width:"540",height:"304"})),(0,a.kt)("p",null,"Le projet n'est pas encore termin\xe9 ! Il faut encore cr\xe9er un boitier pour la Pico et le ruban LED. Ma compagne \xe9tant tr\xe8s dou\xe9e dans ce domaine, elle a mod\xe9lis\xe9 un boitier en 3D et l'a imprim\xe9."),(0,a.kt)("p",null,"Par chance, nous avons du plastique semi-transparent, ce qui permet de voir les LEDs \xe0 travers le boitier."))}h.isMDXComponent=!0},425:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t},n)}},3992:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(7462),a=t(7294),o=t(6010),i=t(2957),l=t(6550),s=t(5238),u=t(3609),c=t(2560);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[s,u]=h({queryString:t,groupId:r}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=t(1048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=u[t].value;r!==l&&(p(n),s(r))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:r}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function w(e){const n=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(v,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function y(e){const n=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},6400:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Hello-World-b7fc97b0a57353523892c80be5124c8b.png"},921:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/MemorryError-b317edca4811ff030bd2cdbada078806.png"},1337:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/RPI-boot-3dc15aef4049632ce28e6c39fa00efd3.png"},7880:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Schema-40b92fa1151781d1811303462c10228b.png"},2208:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/algorigramme-967038077ecb6c222b971367b9e6f603.png"},6139:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/animations-f423f1d58906f866abb60c1359dd570f.gif"},460:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/install-micropython-048474ca6705a3cc4e5786b866bbc5dc.png"},4046:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/ping-connect-4eb670af4480a2e32370fe9765da2d20.png"}}]);