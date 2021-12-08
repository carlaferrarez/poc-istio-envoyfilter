# Controle de throttling utilizando o Istio

## 🚀 Começando

A experimentação foi feita utilizando o sistema operacional Linux. O objetivo é utilizar o EnvoyFilter (sidecar proxy) do Istio para habilitar a feature de limitação de tráfego. O Envoy suporta 2 tipos de limitação: local e global. As limitações locais são usadas para limitar as requisições por serviço (in-mesh traffic). Já a limitação global é utilizada para limitação pelo ingress gateway. Nessa POC será utilizada apenas a global, mas as duas poderiam ser utilizadas juntas. 

<img src="images/nativexmesh.png" width=60% height=60%>

### 📋 Pré-requisitos

* Cluster com Kubernetes rodando na máquina. Nesse tutorial foi utilizado a versão 1.22 do Kubernetes com o minikube. [Tutorial Minikube](https://minikube.sigs.k8s.io/docs/start/)
```
minikube start 
```
<img src="images/minikube.png" width=60% height=60%>


* Instalação do Istio. Nesse tutorial foi utilizado a versão 1.11.4 [Tutorial Istio](https://istio.io/latest/docs/setup/getting-started/)
```
istioctl version
```
<img src="images/istio.png" width=60% height=60%>

### 🔧 Desenvolvimento

COLOCAR IMAGEM

Executando os scripts para criação da infraestrutura:

```
kubectl apply -f config/config-map.yaml
```
O ConfigMap será re
No nosso caso poderia ser um arquivo editado pelos nossos consumidores.

```
kubectl apply -f config/rate-limit-svc.yaml
```

```
kubectl apply -f config/envoy-filter.yaml
```

##### Observação: ao alterar o ConfigMap, o serviço do ratelimit deve ser reiniciado. É uma limitação da feature. Existe uma solução paralela que pode ser utilizada, mas ainda não foi testada

```
https://kubectl.docs.kubernetes.io/guides/config_management/secrets_configmaps/
```


## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

### 🔩 Analise testes de carga

#### Teste sem o header api-key
```
Dar exemplos
```
#### Teste com o header api-key sem parâmetro limitador
```
Dar exemplos
```
#### Teste com o header api-key com parâmetro limitador
```
Dar exemplos
```

## 📌 Limpando o ambiente 

Explicar como executar os testes automatizados para este sistema.

```
kubectl delete deployment ratelimit
kubectl delete deployment redis
kubectl delete envoyfilter filter-ratelimit -n istio-system
kubectl delete envoyfilter filter-ratelimit-svc -n istio-system
kubectl delete svc redis
kubectl delete svc ratelimit
```

## ✒️ Próximos passos

Refinar a aplicabilidade de usar o local rate limit.

---
⌨️ com ❤️ por [Armstrong Lohãns](https://gist.github.com/lohhans) 😊
