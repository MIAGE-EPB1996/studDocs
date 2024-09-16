---
sidebar_label: "Qdrant"
sidebar_position: 3
---

# Chat PDF Qdrant

Premier test avec la base de données vectorielle open source de Qdrant.

Notebook utilisé comme base :

[github](https://github.com/lablab-ai/qdrant-q-and-a-on-pdf.git)

## Configuration de la VM

:::danger[Important]

Assurez-vous d'avoir installé le toolkit CUDA et les pilotes pour l'optimisation GPU. Sinon, suivez les instructions sur cette [page](https://developer.nvidia.com/cuda-downloads).

Sinon, créez votre VM avec une image de démarrage contenant déjà les pilotes et toolkits CUDA.

:::

:::danger[Important]

Assurez-vous également que votre serveur Ollama est en cours d'exécution.

:::

Exécutez ces commandes de configuration dans votre VM pour obtenir toutes les ressources nécessaires :

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh -b
source ~/miniconda3/etc/profile.d/conda.sh

conda create --name myenv python=3.11 -y
conda activate myenv

conda install notebook pytorch torchvision torchaudio cudatoolkit-dev pytorch-cuda=12.4 -c pytorch -c nvidia

pip install pdfplumber qdrant-client transformers sentence-transformers flash_attn ollama
```

Démarrer le serveur de notebook:

```bash
source ~/miniconda3/etc/profile.d/conda.sh
conda activate ~/miniconda3/envs/myenv

cd <votre chemin vers le dossier du notebook>

jupyter notebook --ip="0.0.0.0"
```

Assurez-vous que vos ports sont ouverts sur la VM ou le pare-feu (port 8888).

Accédez à l'adresse affichée dans la ligne de commande mais changez 127.0.0.1 par l'IP externe de votre VM.

## Travaux futurs

- L'utilisation du GPU de la VM est presque à 100% avec deux modèles chargés (llama3.1:8b et dunzhang/stella_en_1.5B_v5)
  - Peut-être diviser en microservices avec des VMs et GPUs individuels
- Une seule base de données vectorielle avec plusieurs PDF
  - Le problème est que la récupération peut être confuse et prendre des morceaux de documents incorrects.
  - Nécessite un pré-filtrage des métadonnées pour n'inclure que les morceaux de documents pertinents
- GUI
