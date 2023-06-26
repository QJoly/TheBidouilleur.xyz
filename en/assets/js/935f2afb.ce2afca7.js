"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Docs","href":"/TheBidouilleur.xyz/en/docs/intro","docId":"intro"},{"type":"category","label":"Adminsys","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"DNS / DHCP avec DNSMASQ","href":"/TheBidouilleur.xyz/en/docs/Adminsys/dnsmasq","docId":"Adminsys/Dnsmasq"},{"type":"link","label":"Using libvirt as non-root user","href":"/TheBidouilleur.xyz/en/docs/Adminsys/rootless-libvirt","docId":"Adminsys/Libvirt"},{"type":"link","label":"Loki - Monitor logs","href":"/TheBidouilleur.xyz/en/docs/Adminsys/loki","docId":"Adminsys/Loki"},{"type":"link","label":"Build Docker multi-architecture","href":"/TheBidouilleur.xyz/en/docs/Adminsys/MultiArch-Build","docId":"Adminsys/Multi-Arch build Docker"},{"type":"link","label":"Introduction \xe0 Packer","href":"/TheBidouilleur.xyz/en/docs/Adminsys/packer-alpine","docId":"Adminsys/Packer"},{"type":"link","label":"Tinc - VPN de Mesh","href":"/TheBidouilleur.xyz/en/docs/Adminsys/Tinc","docId":"Adminsys/Tinc"},{"type":"link","label":"Create your own Debian packages","href":"/TheBidouilleur.xyz/en/docs/Adminsys/creer-deb","docId":"Adminsys/creer-deb"},{"type":"link","label":"Cr\xe9er son d\xe9pot Debian","href":"/TheBidouilleur.xyz/en/docs/Adminsys/creer-repo-debian","docId":"Adminsys/creer-repo-debian"},{"type":"link","label":"Boot PXE avec netboot","href":"/TheBidouilleur.xyz/en/docs/Adminsys/netbootxyz","docId":"Adminsys/netboot.xyz"},{"type":"link","label":"Stocker des secrets dans un d\xe9p\xf4t Git","href":"/TheBidouilleur.xyz/en/docs/Adminsys/sops","docId":"Adminsys/sops"},{"type":"link","label":"V\xe9rification configuration syst\xe8me (testinfra)","href":"/TheBidouilleur.xyz/en/docs/Adminsys/testinfra","docId":"Adminsys/testinfra"}]},{"type":"category","label":"Home","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Exposer vos conteneurs sans NAT avec Cloudflared","href":"/TheBidouilleur.xyz/en/docs/Home/cloudflared","docId":"Home/Cloudflared"},{"type":"link","label":"Cr\xe9ation d\'un cluster ARM","href":"/TheBidouilleur.xyz/en/docs/Home/cluster-arm","docId":"Home/Cluster-ARM"},{"type":"link","label":"QuteBrowser - Un navigateur bas\xe9 sur Vim","href":"/TheBidouilleur.xyz/en/docs/Home/QuteBrowser","docId":"Home/QuteBrowser"}]},{"type":"category","label":"Kubernetes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Kubernetes INside Docker","href":"/TheBidouilleur.xyz/en/docs/Kubernetes/kind","docId":"Kubernetes/Kind"},{"type":"link","label":"Cert-Manager","href":"/TheBidouilleur.xyz/en/docs/Kubernetes/getting-started-cert-manager","docId":"Kubernetes/cert-manager"},{"type":"link","label":"Deploy a full k3s cluster with terraform and ansible","href":"/TheBidouilleur.xyz/en/docs/Kubernetes/k3s-terraform","docId":"Kubernetes/deploy-k3s-with-tf-ansible"},{"type":"link","label":"Lancer un Fsck sur Longhorn","href":"/TheBidouilleur.xyz/en/docs/Kubernetes/longhorn-fsck","docId":"Kubernetes/fix-longhorn-fsck"},{"type":"link","label":"K9S - A TUI interface to manage your cluster","href":"/TheBidouilleur.xyz/en/docs/Kubernetes/K9S - Interface TUI","docId":"Kubernetes/k9s"},{"type":"link","label":"Build docker image on a k3s cluster","href":"/TheBidouilleur.xyz/en/docs/Kubernetes/kaniko","docId":"Kubernetes/kaniko"},{"type":"link","label":"Kubectl sur machine cliente","href":"/TheBidouilleur.xyz/en/docs/Kubernetes/kube-client","docId":"Kubernetes/kube-client"},{"type":"link","label":"NFS avec provisionnement dynamique","href":"/TheBidouilleur.xyz/en/docs/Kubernetes/nfs","docId":"Kubernetes/nfs-pv"},{"type":"link","label":"Using a Private Registry","href":"/TheBidouilleur.xyz/en/docs/Kubernetes/private-registry","docId":"Kubernetes/registre-client"}]}]},"docs":{"Adminsys/creer-deb":{"id":"Adminsys/creer-deb","title":"Create your own Debian packages","description":"Creating your own Debian packages is not as complicated as you might think. We will see how to package your own scripts/programs in an easy and efficient way","sidebar":"tutorialSidebar"},"Adminsys/creer-repo-debian":{"id":"Adminsys/creer-repo-debian","title":"Cr\xe9er son d\xe9pot Debian","description":"Lorsque nous avons de nombreux serveurs, il convient d\'automatiser chacun des d\xe9ploiements que nous r\xe9alisons. Et lorsque la majorit\xe9 sont sous Debian, ces d\xe9ploiements peuvent prendre la forme de fichiers .deb. Nous verrons donc sur cette page comment cr\xe9er notre propre d\xe9p\xf4t Debian","sidebar":"tutorialSidebar"},"Adminsys/Dnsmasq":{"id":"Adminsys/Dnsmasq","title":"DNS / DHCP avec DNSMASQ","description":"Introduction","sidebar":"tutorialSidebar"},"Adminsys/Libvirt":{"id":"Adminsys/Libvirt","title":"Using libvirt as non-root user","description":"What is libvirt?","sidebar":"tutorialSidebar"},"Adminsys/Loki":{"id":"Adminsys/Loki","title":"Loki - Monitor logs","description":"Introduction","sidebar":"tutorialSidebar"},"Adminsys/Multi-Arch build Docker":{"id":"Adminsys/Multi-Arch build Docker","title":"Build Docker multi-architecture","description":"J\'utilise beaucoup Docker sur des environnements ARM (Notamment mon cluster de Raspberry PI). Le probl\xe8me est que les images ne sont pas toujours compatibles avec une architecture ARM.","sidebar":"tutorialSidebar"},"Adminsys/netboot.xyz":{"id":"Adminsys/netboot.xyz","title":"Boot PXE avec netboot","description":"NetBoot est un utilitaire permettant de faciliter la cr\xe9ation d\'un boot PXE. Nous allons voir comment d\xe9ployer NetBoot et garder les assets en local","sidebar":"tutorialSidebar"},"Adminsys/Packer":{"id":"Adminsys/Packer","title":"Introduction \xe0 Packer","description":"Introduction","sidebar":"tutorialSidebar"},"Adminsys/sops":{"id":"Adminsys/sops","title":"Stocker des secrets dans un d\xe9p\xf4t Git","description":"Sops est un utilitaire cr\xe9\xe9 par Mozilla permettant de chiffrer ses secrets. Nous allons voir comment mettre en place SOPS et le coupler \xe0 pre-commit pour ne jamais commit sans chiffrer vos secrets","sidebar":"tutorialSidebar"},"Adminsys/testinfra":{"id":"Adminsys/testinfra","title":"V\xe9rification configuration syst\xe8me (testinfra)","description":"Testinfra est une librairie Python permettant de faire des tests unitaires sur des conditions syst\xe8mes. Nous allons installer Testinfra et cr\xe9er 2-3 tests","sidebar":"tutorialSidebar"},"Adminsys/Tinc":{"id":"Adminsys/Tinc","title":"Tinc - VPN de Mesh","description":"Lorsqu\'on multiplie les infrastructures (locales, distante etc..), avoir un VPN de Mesh permet de vous faciliter la vie. Nous allons donc installer et configurer Tinc","sidebar":"tutorialSidebar"},"Home/Cloudflared":{"id":"Home/Cloudflared","title":"Exposer vos conteneurs sans NAT avec Cloudflared","description":"Vous trouverez ici la documentation officielle de Cloudflare","sidebar":"tutorialSidebar"},"Home/Cluster-ARM":{"id":"Home/Cluster-ARM","title":"Cr\xe9ation d\'un cluster ARM","description":"Apr\xe8s avoir fait mumuse avec mon Dell R610 qui consomme 120W au repos, je me suis toujours pos\xe9 la question de la consommation en \xe9lectricit\xe9 de mes appareils. Je m\'interesse donc \xe0 un Homelab qui pourrait \xeatre le plus \xe9conome possible en \xe9nergie.","sidebar":"tutorialSidebar"},"Home/QuteBrowser":{"id":"Home/QuteBrowser","title":"QuteBrowser - Un navigateur bas\xe9 sur Vim","description":"Il est tard, je suis fatigu\xe9, et dans ces moments, je n\'ai qu\'une envie : apprendre une bricole de plus qui me servira peut-\xeatre un jour (ou pas).","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Docs","description":"Welcome to the TheBidouiller\'s documentations.","sidebar":"tutorialSidebar"},"Kubernetes/cert-manager":{"id":"Kubernetes/cert-manager","title":"Cert-Manager","description":"Cert-Manager est un programme permettant de g\xe9rer les certificats (ainsi que leurs renouvellements) sur des clusters Kubernetes. Nous allons voir comment d\xe9ployer Cert-Manager et g\xe9n\xe9rer nos premiers certificats","sidebar":"tutorialSidebar"},"Kubernetes/deploy-k3s-with-tf-ansible":{"id":"Kubernetes/deploy-k3s-with-tf-ansible","title":"Deploy a full k3s cluster with terraform and ansible","description":"Introduction","sidebar":"tutorialSidebar"},"Kubernetes/fix-longhorn-fsck":{"id":"Kubernetes/fix-longhorn-fsck","title":"Lancer un Fsck sur Longhorn","description":"En relan\xe7ant un de mes pods, je suis tomb\xe9 sur une sale erreur :","sidebar":"tutorialSidebar"},"Kubernetes/k9s":{"id":"Kubernetes/k9s","title":"K9S - A TUI interface to manage your cluster","description":"After getting my hands on kubectl (the utility for managing a kubernetes cluster), I started to find its use slow, boring and unwieldy.","sidebar":"tutorialSidebar"},"Kubernetes/kaniko":{"id":"Kubernetes/kaniko","title":"Build docker image on a k3s cluster","description":"To build an image on a Kubernetes cluster, I found the solution from Kaniko.","sidebar":"tutorialSidebar"},"Kubernetes/Kind":{"id":"Kubernetes/Kind","title":"Kubernetes INside Docker","description":"Avoir un environnement de d\xe9veloppement est important dans tous les domaines. L\'administration d\'un Cluster Kubernetes n\'\xe9chappe pas \xe0 la r\xe8gle. Nous allons donc voir comment cr\xe9er un cluster temporaire directement \xe0 partir de conteneurs Docker","sidebar":"tutorialSidebar"},"Kubernetes/kube-client":{"id":"Kubernetes/kube-client","title":"Kubectl sur machine cliente","description":"Pour administrer votre cluster, vous pouvez vous connecter \xe0 une machine \\"maitre\\" (avec le r\xf4le control-plane) et g\xe9rer votre cluster via l\'utilitaire kubectl.","sidebar":"tutorialSidebar"},"Kubernetes/nfs-pv":{"id":"Kubernetes/nfs-pv","title":"NFS avec provisionnement dynamique","description":"Utiliser le provisionnement dynamique avec NFS sur Kubernetes","sidebar":"tutorialSidebar"},"Kubernetes/registre-client":{"id":"Kubernetes/registre-client","title":"Using a Private Registry","description":"As soon as you play with containers and start creating your own, you need to have your own registry. (For simplicity, optimization, efficiency)","sidebar":"tutorialSidebar"}}}')}}]);