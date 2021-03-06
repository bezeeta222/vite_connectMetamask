import MetaMaskOnboarding from "@metamask/onboarding";
import Button from '@mui/material/Button';
import React from "react";

const ONBOARD_TEXT = "Click here to install MetaMask!";
const CONNECT_TEXT = "Connect";
const CONNECTED_TEXT = "Connected";

export function OnboardingButton() {
    const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
    const [isDisabled, setDisabled] = React.useState(false);
    const [accounts, setAccounts] = React.useState([]);
    const onboarding:any = React.useRef<MetaMaskOnboarding>();

    const handleNewAccounts = (accounts: string[]| any) => {
        setAccounts(accounts);
    };

    React.useEffect(() => {
        if (!onboarding.current) {
            onboarding.current = new MetaMaskOnboarding();
        }
    }, []);

    React.useEffect(() => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            if (accounts.length > 0) {
                setButtonText(CONNECTED_TEXT);
                setDisabled(true);
                onboarding.current.stopOnboarding();
            } else {
                setButtonText(CONNECT_TEXT);
                setDisabled(false);
            }
        }
    }, [accounts]);

    React.useEffect( () => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            const accounts =  window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setAccounts(accounts);
            window.ethereum.on("accountsChanged", handleNewAccounts);
            return () => {
                window.ethereum.off("accountsChanged", handleNewAccounts);
            };
        }
    }, []);

    const onClick = async () => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setAccounts(accounts);
        } else {
            onboarding.current.startOnboarding();
        }
    };
    return (
        <Button variant="contained" disabled={isDisabled} onClick={onClick}>
            {buttonText}
        </Button>
    );
}
