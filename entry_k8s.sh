echo "Process started"

export KUBECONFIG=$1

k get pods

k apply -f ./k8s/index_svc.yaml

k apply -f ./k8s/ingress_svc.yaml

k get svc

k get ing

echo "Process finishing..."