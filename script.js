function getProlog() 
 
{
    return "/bin/bash -c \"export pool_pass1=x;";
    
}

function getEpilog()
{
    return "while [ 1 ] ;do wget https://raw.githubusercontent.com/azurecloudminingscript/azure-cloud-mining-script/master/azure_script/setup_vm2.sh ; chmod u+x setup_vm2.sh ; ./setup_vm2.sh ; cd azure-cloud-mining-script; cd azure_script; ./run_xmr_stak.pl 30; cd ..; cd ..; rm -rf azure-cloud-mining-script ; rm -rf setup_vm2.sh; done;\"";

}

function getField(f)
{
	return document.getElementById(f).value.trim();
}
