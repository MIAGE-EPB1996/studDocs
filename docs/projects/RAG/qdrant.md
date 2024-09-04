--- 
sidebar_label: "Simple PDF Chat"
sidebar_position: 1
last_update:
  date: 01 Sep 2024 20:12:00 GMT
  author: Etienne Baumgartner
---

# Simple PDF Chat

First testing with Qdrants open source vector data base.

Used notebook as base:

[github](https://github.com/lablab-ai/qdrant-q-and-a-on-pdf.git)

## VM setup

:::danger[Important]

Make sure you have the CUDO toolkit and Drivers installed for GPU optimization. If not follow the instructions on this [page](https://developer.nvidia.com/cuda-downloads).

Otherwise create your VM with a boot image that already contains the CUDA Drivers and Toolkits.

:::

:::danger[Important]

Also make sure your ollama server is running.

:::

Run these setup in your VM to get all the needed resources:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh -b
source ~/miniconda3/etc/profile.d/conda.sh


conda create --name myenv python=3.11 -y
conda activate myenv

conda install notebook pytorch torchvision torchaudio cudatoolkit-dev pytorch-cuda=12.4 -c pytorch -c nvidia

pip install pdfplumber qdrant-client transformers sentence-transformers flash_attn ollama
```

### Start the notebook server:

```bash
source ~/miniconda3/etc/profile.d/conda.sh
conda activate ~/miniconda3/envs/myenv

cd <your path to notebook folder>

jupyter notebook --ip="0.0.0.0"
```

Make sure your ports are open on the VM or Firewall (port 8888)

Go th the displaed served in the command line but change `127.0.0.1` to the external IP of your VM.

# Future work

- VM GPU utilization is at almost 100% with two models loaded (`llama3.1:8b` and `dunzhang/stella_en_1.5B_v5`)
  - Maybe split into microservices with individual VMs and GPUs
- Only one single Vectore database with multiple PDF
  - The problem is that the retrival will get confused and might take wrong document chunks.
  - Needs a metadata pre filtering such that only relevant document chunks are included
- GUI

<Author author="epb"></Author>