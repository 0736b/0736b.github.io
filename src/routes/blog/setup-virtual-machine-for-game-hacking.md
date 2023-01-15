---
title: Setup virtual machine for game hacking
date: 2022-12-10
tags: VMware, Windows
intro: Setup VM for using/testing kernel driver and doing some reverse engineering with the kernel driver that can hide debugger.
---

### Create a Virtual Machine on VMware
I'm using ReviOS's Windows 10 Pro 1709 Optimized and Bloatware Removed version.
Choose Custom Configuration from the list of options in the virtual machine creation section (advanced). The following are important parameters.

1. Firmware type: UEFI and Secure Boot disabled
2. Network connection: NAT

Consider your resources when making adjustments to the processors, memory, and hard drive.

After that, install Windows as usual.

![1709-task-mgr](/blog_imgs/1709-task-mgr.png)

We now have a Windows virtual machine, and I've explained why I prefer Windows to ReviOS because it uses so little RAM. Only 0.7 GB of RAM is required for Fresh Install.

### Post-Install

The next stage will be to install the apps and equipment required for game hacking after Windows has been installed.

It's crucial that we avoid installing VMware tools because some games won't let us launch them if they detect that we are running a VM.

For the reverse engineering game process, I installed these useful programs.

##### Programs list
- Browser: Brave
- File archiver: 7-Zip
- Debugger: x64dbg
- Disassembler: IDA Pro
- Kernel explorer: Windows Kernel Explorer (WKE)
- Anti-rootkit: OpenArk
- IDE and Code editor: VS 2019, VS Code, Lazarus, HxD, Notepad++

WKE and OpenArk are useful and practical programs. because the Reverse tab shows that we can access a lot of kernel and that OpenArk can download more reverse tools from within the software.

![open-ark](/blog_imgs/open-ark.png)

Following the installation of these programs, we'll deal with Patchguard, which will make it easy to load and test kernel drivers and includes the necessary kernel drivers that hide VMs and debuggers from games.

#### Disable PatchGuard and DSE with EfiGuard

I'm using EfiGuard [EfiGuard](https://github.com/Mattiwatti/EfiGuard) which is a UEFI bootkit that will allow us to disable PatchGuard and toggle Driver Signature Enforcement (DSE)

after we download `EfiGuard.zip`, when we open it we will found the file `EfiDSEFix.exe` and folder `EFI` then

1. Open Powershell (Run as admin)
2. type the command `mountvol B: /S` for Mounts EFI system partition

![mountvol](/blog_imgs/mountvol.png)

You will see that Drive B: is displayed.

3. Go to `B:\EFI\Boot` and Copy `EfiGuardDxe.efi`, `Loader.efi` from `EfiGuard.zip\EFI\Boot\`

![efi-copy](/blog_imgs/efi-copy1.png)

4. Copy `EfiDSEFix.exe` from `EfiGuard.zip` paste it at `C:`

5. Now Restart VM and press the F2 key repeatly until you enter the Boot Manager

![boot-mgr](/blog_imgs/boot-mgr.png)

6. go to `Enter setup → Configure boot options → Add boot option → select NO VOLUME LABEL → EFI → Boot` will found files `Loader.efi, EfiGuardDxe.efi`

![efi-found](/blog_imgs/efi-found.png)

7. press Enter select `Loader.efi` and enter Input the description `EfiGuard`

![modify-efi](/blog_imgs/modify-efi.png)

8. press `Commit changes and exit` will go back to Boot Manager

9. Now go to `Configure boot options → Change boot order → Change the order → Move EfiGuard to the top`

![boot-order](/blog_imgs/boot-order.png)

10. `Commit change` and `Exit boot manager → Shutdown`

11. Reopen the VM and if installed properly, you will see the EfiGuard Boot page as follows.

![efi-boot](/blog_imgs/efi-boot.png)

That's all, now we can start and disable DSE through `EfiDSEFix.exe` to load and use the Unsigned driver.

by typing
```powershell
EfiDSEFix.exe -d (for disable DSE)
EfiDSEFix.exe -e (for enable DSE)
```

![efi-check](/blog_imgs/efi-check.png)

#### Hiding x64dbg with TitanHide

TitanHide is a driver to hide the debugger from the process. [TitanHide](https://github.com/mrexodia/TitanHide)

Installation
```
1. Copy folder `Plugin` from `TitanHide.zip` to folder `x32/x64` in x64dbg directory
2. Copy `TitanHide.sys` to `%systemroot%\system32\drivers`
3. Run the command `sc create TitanHide binPath= %systemroot%\system32\drivers\TitanHide.sys type= kernel` to create the TitanHide service
4. Run the command `sc start TitanHide to start the TitanHide` service.
```
![titanhide-ins](/blog_imgs/titanhide-ins.png)

#### Hiding VM with VMwareHardenedLoader

To hide VMware from some Anti-vm [VMHardenedLoader](https://github.com/hzqst/VmwareHardenedLoader)


