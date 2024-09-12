---
sidebar_label: "Simple PDF Chat via RAG"
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

Used template:

- [Template](https://console.cloud.google.com/marketplace/product/click-to-deploy-images/deeplearning)
- Changed to Cuda 12.1 and pytorch as default installation
- Check installation of CUDA and NVIDIA drivers directly

Make also sure of the following:

- Access to the VM for the Notebook service (open the port in the GCP firewall)

:::danger[Important]

Make sure you have the CUDO toolkit and Drivers installed for GPU optimization. If not follow the instructions on this [page](https://developer.nvidia.com/cuda-downloads).

Otherwise create your VM with a boot image that already contains the CUDA Drivers and Toolkits.

:::

:::danger[Important]

Also make sure your ollama server is running.

:::

### Packages and dependencies

Run these setup in your VM to get all the needed resources:

```bash
pip install notebook pdfplumber qdrant-client transformers sentence-transformers flash_attn ollama
```

### Start the notebook server:

```bash
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
