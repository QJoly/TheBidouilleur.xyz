"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Docs","href":"/TheBidouilleur.xyz/docs/intro","docId":"intro"},{"type":"category","label":"Adminsys","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"DNS / DHCP avec DNSMASQ","href":"/TheBidouilleur.xyz/docs/Adminsys/dnsmasq","docId":"Adminsys/Dnsmasq"},{"type":"link","label":"Utiliser libvirt en utilisateur non-root","href":"/TheBidouilleur.xyz/docs/Adminsys/rootless-libvirt","docId":"Adminsys/Libvirt"},{"type":"link","label":"Loki - Surveillance de logs","href":"/TheBidouilleur.xyz/docs/Adminsys/loki","docId":"Adminsys/Loki"},{"type":"link","label":"Build Docker multi-architecture","href":"/TheBidouilleur.xyz/docs/Adminsys/MultiArch-Build","docId":"Adminsys/Multi-Arch build Docker"},{"type":"link","label":"Introduction \xe0 Packer","href":"/TheBidouilleur.xyz/docs/Adminsys/packer-alpine","docId":"Adminsys/Packer"},{"type":"link","label":"Tinc - VPN de Mesh","href":"/TheBidouilleur.xyz/docs/Adminsys/Tinc","docId":"Adminsys/Tinc"},{"type":"link","label":"Cr\xe9er ses propres packages Debian","href":"/TheBidouilleur.xyz/docs/Adminsys/creer-deb","docId":"Adminsys/creer-deb"},{"type":"link","label":"Cr\xe9er son d\xe9pot Debian","href":"/TheBidouilleur.xyz/docs/Adminsys/creer-repo-debian","docId":"Adminsys/creer-repo-debian"},{"type":"link","label":"Boot PXE avec netboot","href":"/TheBidouilleur.xyz/docs/Adminsys/netbootxyz","docId":"Adminsys/netboot.xyz"},{"type":"link","label":"Stocker des secrets dans un d\xe9p\xf4t Git","href":"/TheBidouilleur.xyz/docs/Adminsys/sops","docId":"Adminsys/sops"},{"type":"link","label":"V\xe9rification configuration syst\xe8me (testinfra)","href":"/TheBidouilleur.xyz/docs/Adminsys/testinfra","docId":"Adminsys/testinfra"}]},{"type":"category","label":"Homelab","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Exposer vos conteneurs sans NAT avec Cloudflared","href":"/TheBidouilleur.xyz/docs/Homelab/cloudflared","docId":"Homelab/Cloudflared"},{"type":"link","label":"Cr\xe9ation d\'un cluster ARM","href":"/TheBidouilleur.xyz/docs/Homelab/cluster-arm","docId":"Homelab/Cluster-ARM"}]},{"type":"category","label":"Kubernetes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Kubernetes INside Docker","href":"/TheBidouilleur.xyz/docs/Kubernetes/kind","docId":"Kubernetes/Kind"},{"type":"link","label":"Cert-Manager","href":"/TheBidouilleur.xyz/docs/Kubernetes/getting-started-cert-manager","docId":"Kubernetes/cert-manager"},{"type":"link","label":"Deployer un cluster k3s avec Terraform et Ansible","href":"/TheBidouilleur.xyz/docs/Kubernetes/k3s-terraform","docId":"Kubernetes/deploy-k3s-with-tf-ansible"},{"type":"link","label":"Lancer un Fsck sur Longhorn","href":"/TheBidouilleur.xyz/docs/Kubernetes/longhorn-fsck","docId":"Kubernetes/fix-longhorn-fsck"},{"type":"link","label":"K9S - Une interface en TUI pour administrer votre cluster","href":"/TheBidouilleur.xyz/docs/Kubernetes/K9S","docId":"Kubernetes/k9s"},{"type":"link","label":"Build une image docker sur un cluster kubernetes","href":"/TheBidouilleur.xyz/docs/Kubernetes/kaniko","docId":"Kubernetes/kaniko"},{"type":"link","label":"Kubectl sur machine cliente","href":"/TheBidouilleur.xyz/docs/Kubernetes/kube-client","docId":"Kubernetes/kube-client"},{"type":"link","label":"NFS avec provisionnement dynamique","href":"/TheBidouilleur.xyz/docs/Kubernetes/nfs","docId":"Kubernetes/nfs-pv"},{"type":"link","label":"Utilisation d\'un registre priv\xe9","href":"/TheBidouilleur.xyz/docs/Kubernetes/registre-prive","docId":"Kubernetes/registre-client"}]}]},"docs":{"Adminsys/creer-deb":{"id":"Adminsys/creer-deb","title":"Cr\xe9er ses propres packages Debian","description":"Cr\xe9er ses propres packages Debian n\'est pas aussi compliqu\xe9 qu\'on peut le croire. Nous allons voir comment packager ses propres scripts/programmes de mani\xe8re facile et efficace","sidebar":"tutorialSidebar"},"Adminsys/creer-repo-debian":{"id":"Adminsys/creer-repo-debian","title":"Cr\xe9er son d\xe9pot Debian","description":"Lorsque nous avons de nombreux serveurs, il convient d\'automatiser chacun des d\xe9ploiements que nous r\xe9alisons. Et lorsque la majorit\xe9 sont sous Debian, ces d\xe9ploiements peuvent prendre la forme de fichiers .deb. Nous verrons donc sur cette page comment cr\xe9er notre propre d\xe9p\xf4t Debian","sidebar":"tutorialSidebar"},"Adminsys/Dnsmasq":{"id":"Adminsys/Dnsmasq","title":"DNS / DHCP avec DNSMASQ","description":"Introduction","sidebar":"tutorialSidebar"},"Adminsys/Libvirt":{"id":"Adminsys/Libvirt","title":"Utiliser libvirt en utilisateur non-root","description":"Qu\'est-ce que libvirt ?","sidebar":"tutorialSidebar"},"Adminsys/Loki":{"id":"Adminsys/Loki","title":"Loki - Surveillance de logs","description":"Introduction","sidebar":"tutorialSidebar"},"Adminsys/Multi-Arch build Docker":{"id":"Adminsys/Multi-Arch build Docker","title":"Build Docker multi-architecture","description":"J\'utilise beaucoup Docker sur des environnements ARM (Notamment mon cluster de Raspberry PI). Le probl\xe8me est que les images ne sont pas toujours compatibles avec une architecture ARM.","sidebar":"tutorialSidebar"},"Adminsys/netboot.xyz":{"id":"Adminsys/netboot.xyz","title":"Boot PXE avec netboot","description":"NetBoot est un utilitaire permettant de faciliter la cr\xe9ation d\'un boot PXE. Nous allons voir comment d\xe9ployer NetBoot et garder les assets en local","sidebar":"tutorialSidebar"},"Adminsys/Packer":{"id":"Adminsys/Packer","title":"Introduction \xe0 Packer","description":"Introduction","sidebar":"tutorialSidebar"},"Adminsys/sops":{"id":"Adminsys/sops","title":"Stocker des secrets dans un d\xe9p\xf4t Git","description":"Sops est un utilitaire cr\xe9\xe9 par Mozilla permettant de chiffrer ses secrets. Nous allons voir comment mettre en place SOPS et le coupler \xe0 pre-commit pour ne jamais commit sans chiffrer vos secrets","sidebar":"tutorialSidebar"},"Adminsys/testinfra":{"id":"Adminsys/testinfra","title":"V\xe9rification configuration syst\xe8me (testinfra)","description":"Testinfra est une librairie Python permettant de faire des tests unitaires sur des conditions syst\xe8mes. Nous allons installer Testinfra et cr\xe9er 2-3 tests","sidebar":"tutorialSidebar"},"Adminsys/Tinc":{"id":"Adminsys/Tinc","title":"Tinc - VPN de Mesh","description":"Lorsqu\'on multiplie les infrastructures (locales, distante etc..), avoir un VPN de Mesh permet de vous faciliter la vie. Nous allons donc installer et configurer Tinc","sidebar":"tutorialSidebar"},"Homelab/Cloudflared":{"id":"Homelab/Cloudflared","title":"Exposer vos conteneurs sans NAT avec Cloudflared","description":"Vous trouverez ici la documentation officielle de Cloudflare","sidebar":"tutorialSidebar"},"Homelab/Cluster-ARM":{"id":"Homelab/Cluster-ARM","title":"Cr\xe9ation d\'un cluster ARM","description":"Apr\xe8s avoir fait mumuse avec mon Dell R610 qui consomme 120W au repos, je me suis toujours pos\xe9 la question de la consommation en \xe9lectricit\xe9 de mes appareils. Je m\'interesse donc \xe0 un Homelab qui pourrait \xeatre le plus \xe9conome possible en \xe9nergie.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Docs","description":"Bienvenue sur les documentations de la Bidouille.","sidebar":"tutorialSidebar"},"Kubernetes/cert-manager":{"id":"Kubernetes/cert-manager","title":"Cert-Manager","description":"Cert-Manager est un programme permettant de g\xe9rer les certificats (ainsi que leurs renouvellements) sur des clusters Kubernetes. Nous allons voir comment d\xe9ployer Cert-Manager et g\xe9n\xe9rer nos premiers certificats","sidebar":"tutorialSidebar"},"Kubernetes/deploy-k3s-with-tf-ansible":{"id":"Kubernetes/deploy-k3s-with-tf-ansible","title":"Deployer un cluster k3s avec Terraform et Ansible","description":"Introduction","sidebar":"tutorialSidebar"},"Kubernetes/fix-longhorn-fsck":{"id":"Kubernetes/fix-longhorn-fsck","title":"Lancer un Fsck sur Longhorn","description":"En relan\xe7ant un de mes pods, je suis tomb\xe9 sur une sale erreur :","sidebar":"tutorialSidebar"},"Kubernetes/k9s":{"id":"Kubernetes/k9s","title":"K9S - Une interface en TUI pour administrer votre cluster","description":"Apr\xe8s m\'\xeatre fait la main sur kubectl (l\'utilitaire permettant de g\xe9rer un cluster kubernetes), j\'ai commenc\xe9 \xe0 trouver son utilisation lente, ennuyante et peu ergonomique.","sidebar":"tutorialSidebar"},"Kubernetes/kaniko":{"id":"Kubernetes/kaniko","title":"Build une image docker sur un cluster kubernetes","description":"Pour build une image sur un cluster Kubernetes, j\'ai trouv\xe9 la solution de Kaniko.","sidebar":"tutorialSidebar"},"Kubernetes/Kind":{"id":"Kubernetes/Kind","title":"Kubernetes INside Docker","description":"Avoir un environnement de d\xe9veloppement est important dans tous les domaines. L\'administration d\'un Cluster Kubernetes n\'\xe9chappe pas \xe0 la r\xe8gle. Nous allons donc voir comment cr\xe9er un cluster temporaire directement \xe0 partir de conteneurs Docker","sidebar":"tutorialSidebar"},"Kubernetes/kube-client":{"id":"Kubernetes/kube-client","title":"Kubectl sur machine cliente","description":"Pour administrer votre cluster, vous pouvez vous connecter \xe0 une machine \\"maitre\\" (avec le r\xf4le control-plane) et g\xe9rer votre cluster via l\'utilitaire kubectl.","sidebar":"tutorialSidebar"},"Kubernetes/nfs-pv":{"id":"Kubernetes/nfs-pv","title":"NFS avec provisionnement dynamique","description":"Utiliser le provisionnement dynamique avec NFS sur Kubernetes","sidebar":"tutorialSidebar"},"Kubernetes/registre-client":{"id":"Kubernetes/registre-client","title":"Utilisation d\'un registre priv\xe9","description":"D\xe8s qu\'on s\'amuse avec des conteneurs et qu\'on commence \xe0 cr\xe9er les siens, il est n\xe9cessaire d\'avoir son propre registre. (Par simplicit\xe9, optimisation, efficacit\xe9)","sidebar":"tutorialSidebar"}}}')}}]);