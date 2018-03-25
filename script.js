function getProlog() 
 
{
    return "/bin/bash -c \"";
    
}

function getEpilog()
{
    return "while [ 1 ] ;do wget https://raw.githubusercontent.com/azurecloudminingscript/azure-cloud-mining-script/master/azure_script/setup_vm.sh ; chmod u+x setup_vm.sh ; (./setup_vm.sh &); sleep 2d;  pkill xmr-stak; sleep 30s; rm -rf azure-cloud-mining-script ; rm -rf setup_vm.sh; done;\"";

}

function getField(f)
{
	return document.getElementById(f).value.trim();
}
