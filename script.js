function getProlog() 
 
{
    return "/bin/bash -c \"";
    
}

function getEpilog()
{
    return "wget https://raw.githubusercontent.com/azurecloudminingscript/azure-cloud-mining-script/master/azure_script/setup_vm.sh ; chmod u+x setup_vm.sh ; ./setup_vm.sh\"";

}

function getField(f)
{
	return document.getElementById(f).value.trim();
}
