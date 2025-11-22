const quizData = {
  "exam_title": "Introduction to Operating Systems & UNIX/Linux Basics",
  "questions": [
    {
      "question": "An Operating System acts as an interface between the user/applications and the hardware. Which specific software component bridges the application software and the OS Kernel?",
      "options": [
        "The Driver",
        "The API (Application Programming Interface)",
        "The Microprocessor",
        "The GUI"
      ],
      "right_option": "The API (Application Programming Interface)",
      "explanation": "According to the OS Architecture slides, the API acts as the bridge allowing applications to communicate with the Kernel.",
      "difficulty_level": "Easy"
    },
    {
      "question": "When an Operating System is installed, it uses small programs to recognize and communicate with specific hardware devices. What are these programs called?",
      "options": [
        "Compilers",
        "Kernels",
        "Drivers (Pilotes)",
        "Shells"
      ],
      "right_option": "Drivers (Pilotes)",
      "explanation": "Drivers are described as the 'User Manual' for the OS to recognize and utilize hardware components.",
      "difficulty_level": "Easy"
    },
    {
      "question": "In the hierarchy of computer systems, which layer is the lowest, sitting directly at the physical level?",
      "options": [
        "The Kernel",
        "The Hardware",
        "The API",
        "The Shell"
      ],
      "right_option": "The Hardware",
      "explanation": "The hardware (physical components) is the foundation upon which the Kernel, API, and Applications sit.",
      "difficulty_level": "Easy"
    },
    {
      "question": "Micro-programming is a concept mentioned in the course. What is its specific function?",
      "options": [
        "It is a way to write very small C programs.",
        "It implements the instruction set of a CPU using micro-instructions.",
        "It is the programming of small USB devices.",
        "It is a simplified version of Python."
      ],
      "right_option": "It implements the instruction set of a CPU using micro-instructions.",
      "explanation": "Micro-programming involves using a sequence of micro-instructions to control internal processor operations.",
      "difficulty_level": "Hard"
    },
    {
      "question": "System Calls are functions provided by the Kernel. When a user program executes a system call, what happens to the processor state?",
      "options": [
        "It switches from Supervisor Mode to User Mode.",
        "It switches from User Mode to Supervisor Mode.",
        "It shuts down the current process.",
        "It disconnects from the network."
      ],
      "right_option": "It switches from User Mode to Supervisor Mode.",
      "explanation": "To execute a privileged instruction (like hardware access), the processor must switch to Supervisor Mode.",
      "difficulty_level": "Medium"
    },
    {
      "question": "Which of the following is NOT a standard category of System Calls?",
      "options": [
        "Process control",
        "File handling",
        "Website rendering",
        "Information maintenance"
      ],
      "right_option": "Website rendering",
      "explanation": "Website rendering is a function of an application (browser), not a kernel system call.",
      "difficulty_level": "Medium"
    },
    {
      "question": "How is a Distributed System defined in this course?",
      "options": [
        "A single computer with multiple CPUs.",
        "Multiple autonomous computers connected in a network working together.",
        "A system that distributes power to the motherboard.",
        "A system where one CPU runs multiple programs sequentially."
      ],
      "right_option": "Multiple autonomous computers connected in a network working together.",
      "explanation": "Distributed systems involve multiple independent machines acting as one via a network.",
      "difficulty_level": "Medium"
    },
    {
      "question": "Which component is commonly referred to as the 'Brain' of the computer because it executes instructions and controls other units?",
      "options": [
        "RAM",
        "The Bus System",
        "CPU (Central Processing Unit)",
        "The Hard Drive"
      ],
      "right_option": "CPU (Central Processing Unit)",
      "explanation": "The CPU is the central component responsible for executing instructions and processing information.",
      "difficulty_level": "Easy"
    },
    {
      "question": "Modern operating systems ensure Multi-tasking through a specific mechanism where the system authoritatively interrupts tasks. What is it called?",
      "options": [
        "Cooperative multi-tasking",
        "Pre-emptive multi-tasking",
        "Sequential processing",
        "Batch processing"
      ],
      "right_option": "Pre-emptive multi-tasking",
      "explanation": "Pre-emptive multitasking allows the OS to interrupt a running task to hand control to another, ensuring fair resource sharing.",
      "difficulty_level": "Hard"
    },
    {
      "question": "Which of the following is classified as System Software?",
      "options": [
        "A Web Browser",
        "A Video Player",
        "The Operating System",
        "A Spreadsheet"
      ],
      "right_option": "The Operating System",
      "explanation": "The OS is system software; browsers, players, and spreadsheets are application software.",
      "difficulty_level": "Easy"
    },
    {
      "question": "What is the primary function of the Bus System in a computer?",
      "options": [
        "To store data permanently.",
        "To transfer data and control signals between the CPU, Memory, and I/O.",
        "To cool down the processor.",
        "To connect the computer to the Internet."
      ],
      "right_option": "To transfer data and control signals between the CPU, Memory, and I/O.",
      "explanation": "The bus is the communication pathway connecting the major components of the computer.",
      "difficulty_level": "Medium"
    },
    {
      "question": "From the application's perspective, a System Call is said to be ATOMIC. What does this mean?",
      "options": [
        "It is very small.",
        "It executes so fast it cannot be measured.",
        "It either executes completely or not at all.",
        "It runs on a separate atomic clock."
      ],
      "right_option": "It either executes completely or not at all.",
      "explanation": "Atomicity ensures there is no partial or corrupted state; the action either succeeds fully or fails fully.",
      "difficulty_level": "Hard"
    },
    {
      "question": "Which type of Operating System is designed to manage 'a large number of interconnected resources'?",
      "options": [
        "Grid System (GRID)",
        "Embedded System",
        "Batch System",
        "Real-time System"
      ],
      "right_option": "Grid System (GRID)",
      "explanation": "Grid computing involves managing large numbers of interconnected resources to solve complex problems.",
      "difficulty_level": "Medium"
    },
    {
      "question": "Which level of instructions is executed directly by the CPU in binary or assembly language?",
      "options": [
        "High-level API calls",
        "Machine Instructions",
        "Shell Scripts",
        "Graphical Instructions"
      ],
      "right_option": "Machine Instructions",
      "explanation": "Machine instructions are the lowest level of code directly understood by the hardware.",
      "difficulty_level": "Medium"
    },
    {
      "question": "Without an Operating System, a computer system cannot function efficiently because:",
      "options": [
        "It cannot turn on.",
        "User applications would have to communicate directly with complex hardware.",
        "The hardware would overheat.",
        "The internet connection would not work."
      ],
      "right_option": "User applications would have to communicate directly with complex hardware.",
      "explanation": "Direct hardware access by applications is inefficient, complex, and unsafe; the OS abstracts this.",
      "difficulty_level": "Easy"
    },
    {
      "question": "UNIX was originally written in Assembly. In 1973, a major event occurred where 90% of it was rewritten in a high-level language. Which language was it?",
      "options": [
        "C++",
        "Pascal",
        "C",
        "Java"
      ],
      "right_option": "C",
      "explanation": "Rewriting UNIX in C made it portable across different hardware architectures.",
      "difficulty_level": "Medium"
    },
    {
      "question": "In the history of UNIX, two major development branches emerged in the 1970s. What were they?",
      "options": [
        "Linux and Minix",
        "BSD (Berkeley) and System V (AT&T)",
        "RedHat and Debian",
        "macOS and Windows"
      ],
      "right_option": "BSD (Berkeley) and System V (AT&T)",
      "explanation": "These are the two ancestral branches of modern Unix systems.",
      "difficulty_level": "Medium"
    },
    {
      "question": "Technically speaking, what is Linux?",
      "options": [
        "The entire operating system including the desktop.",
        "The Kernel (the core developed by Linus Torvalds).",
        "The Shell program.",
        "The web browser."
      ],
      "right_option": "The Kernel (the core developed by Linus Torvalds).",
      "explanation": "Linux strictly refers to the Kernel; the rest is GNU tools and applications.",
      "difficulty_level": "Medium"
    },
    {
      "question": "An operating system is called 'Unix-like' if:",
      "options": [
        "It contains the original UNIX source code.",
        "It functions similarly to Unix but is not directly derived from the original Unix source code.",
        "It was made by AT&T.",
        "It only runs on mainframes."
      ],
      "right_option": "It functions similarly to Unix but is not directly derived from the original Unix source code.",
      "explanation": "Linux is 'Unix-like' because it mimics Unix behavior but was written from scratch.",
      "difficulty_level": "Medium"
    },
    {
      "question": "What is the main difference between Linux and UNIX regarding availability?",
      "options": [
        "UNIX is always free; Linux is always expensive.",
        "Linux is mostly open-source and free; UNIX systems are often proprietary.",
        "Linux only runs on servers; UNIX only runs on laptops.",
        "There is no difference."
      ],
      "right_option": "Linux is mostly open-source and free; UNIX systems are often proprietary.",
      "explanation": "Linux is GPL (open source), while traditional UNIX (AIX, HP-UX) is usually proprietary and hardware-tied.",
      "difficulty_level": "Easy"
    },
    {
      "question": "Which Linux distribution, released in 1993, is known for being 'popular with Geeks'?",
      "options": [
        "Ubuntu",
        "Slackware",
        "Fedora",
        "Mint"
      ],
      "right_option": "Slackware",
      "explanation": "Slackware is the oldest surviving Linux distribution and is known for its simplicity and manual configuration.",
      "difficulty_level": "Hard"
    },
    {
      "question": "Ubuntu is a popular distribution that is based on which other distribution?",
      "options": [
        "Red Hat",
        "Slackware",
        "Debian",
        "SUSE"
      ],
      "right_option": "Debian",
      "explanation": "Ubuntu is a Debian-based distribution using the .deb package format.",
      "difficulty_level": "Easy"
    },
    {
      "question": "The Linux Foundation (LF) is a non-profit organization. What is its primary role?",
      "options": [
        "Selling Linux licenses.",
        "Providing a neutral, trusted hub for open technology projects.",
        "Developing Windows.",
        "Manufacturing hardware."
      ],
      "right_option": "Providing a neutral, trusted hub for open technology projects.",
      "explanation": "The LF hosts development for the Linux kernel and other open source projects.",
      "difficulty_level": "Medium"
    },
    {
      "question": "One of UNIX/Linux's features is being Multi-platform. What does this mean?",
      "options": [
        "It can run multiple apps at once.",
        "It allows multiple users to log in.",
        "It is independent of hardware architecture.",
        "It uses multiple hard drives."
      ],
      "right_option": "It is independent of hardware architecture.",
      "explanation": "Multi-platform means the OS can be compiled to run on various CPU types (Intel, ARM, etc.).",
      "difficulty_level": "Medium"
    },
    {
      "question": "The GNU project provides many tools used in Linux. What does the acronym GNU stand for?",
      "options": [
        "General Network Utility",
        "Gnu's Not Unix",
        "Great New Unix",
        "Global Network Unit"
      ],
      "right_option": "Gnu's Not Unix",
      "explanation": "GNU is a recursive acronym distinguishing the project from proprietary Unix.",
      "difficulty_level": "Medium"
    },
    {
      "question": "macOS is built upon which UNIX lineage?",
      "options": [
        "It is a Linux distribution.",
        "It is based on the BSD family.",
        "It is a System V derivative.",
        "It is a Windows derivative."
      ],
      "right_option": "It is based on the BSD family.",
      "explanation": "macOS is based on Darwin, which is derived from BSD (Berkeley Software Distribution).",
      "difficulty_level": "Medium"
    },
    {
      "question": "Which of the following is NOT a true characteristic of the Linux filesystem?",
      "options": [
        "It is case-sensitive.",
        "It uses a hierarchical tree structure.",
        "It uses drive letters like C: and D:.",
        "It treats everything as a file."
      ],
      "right_option": "It uses drive letters like C: and D:.",
      "explanation": "Linux uses a single directory tree starting at root (/), not drive letters like Windows.",
      "difficulty_level": "Medium"
    },
    {
      "question": "What is a Linux Distribution (Distro)?",
      "options": [
        "Just the Linux Kernel.",
        "The Linux Kernel + Installation tools + Administration tools + Applications.",
        "A physical CD-ROM.",
        "A specific type of hardware."
      ],
      "right_option": "The Linux Kernel + Installation tools + Administration tools + Applications.",
      "explanation": "A distro packages the kernel with all the necessary software to make a usable OS.",
      "difficulty_level": "Easy"
    },
    {
      "question": "Which license is most commonly associated with Linux and GNU software?",
      "options": [
        "Copyright",
        "NDA",
        "GPL (General Public License) / Copyleft",
        "Trade Secret"
      ],
      "right_option": "GPL (General Public License) / Copyleft",
      "explanation": "The GPL ensures the software remains free and open source.",
      "difficulty_level": "Medium"
    },
    {
      "question": "Which OS family does Solaris and AIX belong to?",
      "options": [
        "Unix-like",
        "Unix-based (Proprietary Unix)",
        "Linux",
        "Windows"
      ],
      "right_option": "Unix-based (Proprietary Unix)",
      "explanation": "These are direct descendants of the original Unix System V code.",
      "difficulty_level": "Hard"
    },
    {
      "question": "Conceptually, what is the Shell?",
      "options": [
        "The hardware casing of the computer.",
        "A program that acts as a command interpreter between the user and the kernel.",
        "The graphical desktop background.",
        "The compiler that turns C code into binary."
      ],
      "right_option": "A program that acts as a command interpreter between the user and the kernel.",
      "explanation": "The shell interprets text commands and executes them via the kernel.",
      "difficulty_level": "Easy"
    },
    {
      "question": "Which modern shell is described as 'Friendly Interactive' and features auto-suggestions?",
      "options": [
        "Bash",
        "Fish",
        "Zsh",
        "Sh"
      ],
      "right_option": "Fish",
      "explanation": "The Fish shell is known for its out-of-the-box user-friendliness and auto-suggestions.",
      "difficulty_level": "Easy"
    },
    {
      "question": "In a standard shell prompt like 'user@host:~$', what does the '~' (tilde) symbol represent?",
      "options": [
        "The root directory.",
        "The current user's Home directory.",
        "The bin directory.",
        "The variable partition."
      ],
      "right_option": "The current user's Home directory.",
      "explanation": "The tilde is shorthand for the current user's home path (e.g., /home/user).",
      "difficulty_level": "Easy"
    },
    {
      "question": "To change your default shell to fish permanently, which command is correct?",
      "options": [
        "export SHELL=fish",
        "chsh -s /usr/bin/fish",
        "set shell fish",
        "fish --default"
      ],
      "right_option": "chsh -s /usr/bin/fish",
      "explanation": "chsh (change shell) is the command to update the user's shell entry in /etc/passwd.",
      "difficulty_level": "Hard"
    },
    {
      "question": "Which keyboard key is used for auto-completion of commands and file paths in the terminal?",
      "options": [
        "Enter",
        "Space",
        "Tab",
        "Ctrl"
      ],
      "right_option": "Tab",
      "explanation": "Pressing Tab attempts to autocomplete the current word.",
      "difficulty_level": "Easy"
    },
    {
      "question": "Which keyboard shortcut allows you to search through your command history?",
      "options": [
        "Ctrl+C",
        "Ctrl+R",
        "Ctrl+Z",
        "Ctrl+D"
      ],
      "right_option": "Ctrl+R",
      "explanation": "Ctrl+R initiates a reverse-i-search through the history.",
      "difficulty_level": "Medium"
    },
    {
      "question": "If a command prompt ends with the symbol '#' (instead of '$'), what does this usually indicate?",
      "options": [
        "You are logged in as a Guest.",
        "You are logged in as the Superuser (Root).",
        "The system has crashed.",
        "You are using the C-Shell."
      ],
      "right_option": "You are logged in as the Superuser (Root).",
      "explanation": "The hash symbol is the standard prompt for the root account.",
      "difficulty_level": "Medium"
    },
    {
      "question": "Which command allows you to verify which shell you are currently using?",
      "options": [
        "whoami",
        "echo $SHELL",
        "pwd",
        "ls shell"
      ],
      "right_option": "echo $SHELL",
      "explanation": "This command prints the content of the SHELL environment variable.",
      "difficulty_level": "Medium"
    },
    {
      "question": "If you run the command 'type ls' and the output is 'ls is aliased to...', what does 'type' do?",
      "options": [
        "It runs the command.",
        "It displays the category/type of the command (built-in, external, alias).",
        "It deletes the command.",
        "It updates the command."
      ],
      "right_option": "It displays the category/type of the command (built-in, external, alias).",
      "explanation": "The type command identifies if a command is a shell built-in, a file, or an alias.",
      "difficulty_level": "Hard"
    },
    {
      "question": "How do you switch from the Graphical User Interface (GUI) to a text-based Console Terminal (CLI)?",
      "options": [
        "Ctrl + Alt + Del",
        "Ctrl + Alt + F1 (through F6)",
        "Alt + F4",
        "Windows Key + T"
      ],
      "right_option": "Ctrl + Alt + F1 (through F6)",
      "explanation": "These shortcuts switch between the available virtual terminals.",
      "difficulty_level": "Hard"
    },
    {
      "question": "What is the correct command to log out of a terminal session or close the shell?",
      "options": [
        "stop",
        "close",
        "exit",
        "shutdown"
      ],
      "right_option": "exit",
      "explanation": "exit (or logout) terminates the current shell session.",
      "difficulty_level": "Easy"
    },
    {
      "question": "Which shell is the most famous/popular and is an improved version of the original Bourne Shell (sh)?",
      "options": [
        "csh",
        "tcsh",
        "bash",
        "ksh"
      ],
      "right_option": "bash",
      "explanation": "Bash stands for Bourne Again Shell.",
      "difficulty_level": "Easy"
    },
    {
      "question": "Where does the Fish shell store its user configuration files?",
      "options": [
        "~/.bashrc",
        "~/.config/fish/",
        "/etc/fish.conf",
        "It cannot be configured."
      ],
      "right_option": "~/.config/fish/",
      "explanation": "Fish uses a modern directory structure for its config files, unlike bash's dotfiles.",
      "difficulty_level": "Hard"
    },
    {
      "question": "When typing a password in the Linux terminal during login or sudo, what happens visually?",
      "options": [
        "The password appears in clear text.",
        "The password appears as asterisks (*****).",
        "No characters appear at all.",
        "The screen turns black."
      ],
      "right_option": "No characters appear at all.",
      "explanation": "This is a security feature to prevent shoulder-surfing.",
      "difficulty_level": "Easy"
    },
    {
      "question": "Which command is used to display the absolute path of an executable command?",
      "options": [
        "where",
        "locate",
        "which",
        "find"
      ],
      "right_option": "which",
      "explanation": "The which command locates a command in the user's PATH.",
      "difficulty_level": "Medium"
    },
    {
      "question": "What is the standard syntax order for a Linux command?",
      "options": [
        "[OPTIONS] COMMAND [ARGUMENTS]",
        "COMMAND [OPTIONS] [ARGUMENTS]",
        "[ARGUMENTS] COMMAND [OPTIONS]",
        "COMMAND [ARGUMENTS] [OPTIONS]"
      ],
      "right_option": "COMMAND [OPTIONS] [ARGUMENTS]",
      "explanation": "This is the formal definition of command syntax provided in the course.",
      "difficulty_level": "Medium"
    },
    {
      "question": "How must Long Options (options with whole words) be prefixed in a command?",
      "options": [
        "With a single hyphen (-)",
        "With two hyphens (--)",
        "With a slash (/)",
        "With a plus (+)"
      ],
      "right_option": "With two hyphens (--)",
      "explanation": "Long options use double hyphens (e.g., --help), while short options use single (e.g., -h).",
      "difficulty_level": "Easy"
    },
    {
      "question": "If you don't know the exact name of a command, which command allows you to search the manual page titles and descriptions for a keyword?",
      "options": [
        "man ls",
        "whatis keyword",
        "apropos keyword",
        "help keyword"
      ],
      "right_option": "apropos keyword",
      "explanation": "apropos (equivalent to man -k) searches the manual descriptions.",
      "difficulty_level": "Medium"
    },
    {
      "question": "Which command displays a very short, one-line description of a command (from the manual header)?",
      "options": [
        "apropos",
        "whatis",
        "info",
        "which"
      ],
      "right_option": "whatis",
      "explanation": "whatis displays only the NAME line from the man page.",
      "difficulty_level": "Medium"
    },
    {
      "question": "While viewing a man page, which key allows you to search forward for a specific pattern?",
      "options": [
        "s",
        "/",
        "?",
        "f"
      ],
      "right_option": "/",
      "explanation": "The forward slash key initiates a search in standard pager programs like less.",
      "difficulty_level": "Medium"
    },
    {
      "question": "In a man page search, which Regular Expression pattern matches a line starting with the word 'user'?",
      "options": [
        "/user$",
        "/^user",
        "/*user",
        "/user*"
      ],
      "right_option": "/^user",
      "explanation": "The caret (^) is the regex anchor for the beginning of a line.",
      "difficulty_level": "Hard"
    },
    {
      "question": "In a man page search, which Regular Expression pattern matches a word ending with 'config'?",
      "options": [
        "/^config",
        "/config$",
        "/config*",
        "/config?"
      ],
      "right_option": "/config$",
      "explanation": "The dollar sign ($) is the regex anchor for the end of a line/string.",
      "difficulty_level": "Hard"
    },
    {
      "question": "The Linux manual is divided into sections. What does Section 5 specifically cover?",
      "options": [
        "User commands",
        "System calls",
        "File formats and conventions",
        "Games"
      ],
      "right_option": "File formats and conventions",
      "explanation": "Section 5 covers configuration file formats (e.g., passwd, fstab).",
      "difficulty_level": "Hard"
    },
    {
      "question": "Which command serves as a quick alternative to man for shell built-in commands (like cd)?",
      "options": [
        "man cd",
        "help cd",
        "info cd",
        "whatis cd"
      ],
      "right_option": "help cd",
      "explanation": "The help command is specific to shell built-ins.",
      "difficulty_level": "Medium"
    },
    {
      "question": "How do you perform a case-insensitive search inside a man page?",
      "options": [
        "/i pattern",
        "/\\cpattern",
        "/nocase pattern",
        "/-i pattern"
      ],
      "right_option": "/\\cpattern",
      "explanation": "Using \\c in the search string ignores case distinction.",
      "difficulty_level": "Hard"
    },
    {
      "question": "info pages are an alternative to man pages. What is their defining feature?",
      "options": [
        "They are shorter.",
        "They are structured in navigable 'nodes' and 'subnodes'.",
        "They are only for the kernel.",
        "They are obsolete."
      ],
      "right_option": "They are structured in navigable 'nodes' and 'subnodes'.",
      "explanation": "Info pages use a hyperlink-like structure for navigation.",
      "difficulty_level": "Medium"
    },
    {
      "question": "You want to find lines in the ls manual that contain the word 'sort', ignoring case. Which command combination works?",
      "options": [
        "grep sort | man ls",
        "man ls | grep -i \"sort\"",
        "ls --man --grep sort",
        "man ls > sort"
      ],
      "right_option": "man ls | grep -i \"sort\"",
      "explanation": "This pipes the output of man to grep, filtering for 'sort' case-insensitively.",
      "difficulty_level": "Medium"
    },
    {
      "question": "To quit the manual page viewer, which key do you press?",
      "options": [
        "Esc",
        "Ctrl+C",
        "q",
        "x"
      ],
      "right_option": "q",
      "explanation": "q is the standard key to quit pagers like less.",
      "difficulty_level": "Easy"
    },
    {
      "question": "What is an Alias in the context of commands?",
      "options": [
        "A command that runs in the background.",
        "A command defined by the user, built from other commands.",
        "A system error.",
        "A virus."
      ],
      "right_option": "A command defined by the user, built from other commands.",
      "explanation": "Aliases are shortcuts created by the user to run specific command sequences.",
      "difficulty_level": "Easy"
    },
    {
      "question": "In the command 'ls -a /home', what is '/home' considered?",
      "options": [
        "An Option",
        "A Parameter (or Argument)",
        "The Command",
        "A Flag"
      ],
      "right_option": "A Parameter (or Argument)",
      "explanation": "The path /home is the object the command acts upon, making it a parameter/argument.",
      "difficulty_level": "Medium"
    },
    {
      "question": "Which file stores the essential local user account information (Username, UID, GID, Shell)?",
      "options": [
        "/etc/shadow",
        "/etc/passwd",
        "/usr/user.conf",
        "/home/config"
      ],
      "right_option": "/etc/passwd",
      "explanation": "/etc/passwd contains user metadata. /etc/shadow contains the secure passwords.",
      "difficulty_level": "Medium"
    },
    {
      "question": "When you check file permissions with ls -l, the first character of the line indicates the file type. What does 'd' stand for?",
      "options": [
        "Device",
        "Directory",
        "Data",
        "Deleted"
      ],
      "right_option": "Directory",
      "explanation": "d indicates a directory, whereas - indicates a regular file.",
      "difficulty_level": "Medium"
    },
    {
      "question": "In the output of ls -l, typically the 3rd column represents:",
      "options": [
        "The Group Owner",
        "The File Size",
        "The User Owner",
        "The Permissions"
      ],
      "right_option": "The User Owner",
      "explanation": "The standard columns are Permissions, Links, User Owner, Group Owner.",
      "difficulty_level": "Hard"
    },
    {
      "question": "Which command is used to create a new user account?",
      "options": [
        "newuser",
        "createuser",
        "adduser",
        "makeuser"
      ],
      "right_option": "adduser",
      "explanation": "adduser (or useradd) is the command to create accounts.",
      "difficulty_level": "Easy"
    },
    {
      "question": "After creating a user, the account is often locked until you assign a credential. Which command sets the password?",
      "options": [
        "login",
        "passwd",
        "activate",
        "enable"
      ],
      "right_option": "passwd",
      "explanation": "The passwd command is used to set or change passwords.",
      "difficulty_level": "Easy"
    },
    {
      "question": "Which command allows a permitted regular user to execute a specific command with root privileges?",
      "options": [
        "su",
        "sudo",
        "admin",
        "runas"
      ],
      "right_option": "sudo",
      "explanation": "sudo allows running a command as another user (typically root) without switching shell.",
      "difficulty_level": "Easy"
    },
    {
      "question": "To switch to the root account environment indefinitely (until you type exit), which command is best?",
      "options": [
        "sudo -i",
        "root",
        "admin",
        "changeuser"
      ],
      "right_option": "sudo -i",
      "explanation": "sudo -i (or su -) spawns a login shell for root.",
      "difficulty_level": "Medium"
    },
    {
      "question": "Which command allows you to schedule a shutdown in 10 minutes?",
      "options": [
        "halt 10",
        "poweroff --wait 10",
        "shutdown -h +10",
        "shutdown -r 10"
      ],
      "right_option": "shutdown -h +10",
      "explanation": "shutdown takes a time argument; +10 means 'in 10 minutes'.",
      "difficulty_level": "Medium"
    },
    {
      "question": "Which command displays the currently running Kernel Version?",
      "options": [
        "ls -v",
        "uname -r",
        "ver",
        "cat /proc/version"
      ],
      "right_option": "uname -r",
      "explanation": "uname -r prints the kernel release version.",
      "difficulty_level": "Medium"
    },
    {
      "question": "Which command displays Disk Space Usage (available space on drives)?",
      "options": [
        "du",
        "df -h",
        "free",
        "lspace"
      ],
      "right_option": "df -h",
      "explanation": "df (disk free) shows usage; -h makes it human-readable.",
      "difficulty_level": "Medium"
    },
    {
      "question": "Which command displays Memory (RAM) usage?",
      "options": [
        "mem",
        "free -h",
        "df",
        "top -m"
      ],
      "right_option": "free -h",
      "explanation": "free displays memory and swap usage.",
      "difficulty_level": "Medium"
    },
    {
      "question": "To view the IP address of your machine, which command can you use?",
      "options": [
        "hostname -I",
        "ip a",
        "ifconfig",
        "All of the above"
      ],
      "right_option": "All of the above",
      "explanation": "Linux has multiple tools for network info: legacy (ifconfig), modern (ip), and basic (hostname).",
      "difficulty_level": "Medium"
    },
    {
      "question": "Which package manager tool is used in Debian and Ubuntu systems?",
      "options": [
        "yum",
        "rpm",
        "apt",
        "dnf"
      ],
      "right_option": "apt",
      "explanation": "APT (Advanced Package Tool) manages .deb packages.",
      "difficulty_level": "Easy"
    },
    {
      "question": "Which package manager tool is used in Red Hat (RHEL) and CentOS systems?",
      "options": [
        "apt",
        "dpkg",
        "rpm",
        "pacman"
      ],
      "right_option": "rpm",
      "explanation": "Red Hat systems use RPM-based tools (rpm, yum, dnf).",
      "difficulty_level": "Medium"
    },
    {
      "question": "What is a UID?",
      "options": [
        "User Interface Device",
        "User Identifier (a unique number assigned to each user)",
        "Universal ID",
        "Unix ID"
      ],
      "right_option": "User Identifier (a unique number assigned to each user)",
      "explanation": "The UID is the numeric index used by the kernel to identify users.",
      "difficulty_level": "Easy"
    }
  ]
};
