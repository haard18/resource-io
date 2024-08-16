export const WEBDEVELOPMENT = {
    name: 'Web Development',
    children: [
        {
            name: 'Frontend Development',
            attributes: {
                Skill: 'Designing User Interfaces',
            },
            children: [
                {
                    name: 'HTML',
                    attributes: {
                        Description: 'Hypertext Markup Language',
                    },
                    children: [
                        {
                            name: 'Basic HTML Tags',
                        },
                        {
                            name: 'Forms and Inputs',
                        },
                        {
                            name: 'Semantic HTML',
                        },
                    ],
                },
                {
                    name: 'CSS',
                    attributes: {
                        Description: 'Cascading Style Sheets',
                    },
                    children: [
                        {
                            name: 'Selectors and Properties',
                        },
                        {
                            name: 'Flexbox',
                        },
                        {
                            name: 'Grid Layout',
                        },
                        {
                            name: 'Responsive Design',
                        },
                    ],
                },
                {
                    name: 'JavaScript',
                    attributes: {
                        Description: 'Programming Language for Web',
                    },
                    children: [
                        {
                            name: 'Basic Syntax',
                        },
                        {
                            name: 'DOM Manipulation',
                        },
                        {
                            name: 'Event Handling',
                        },
                        {
                            name: 'Asynchronous Programming',
                        },
                        {
                            name: 'Frameworks (React, Vue, Angular)',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Backend Development',
            attributes: {
                Skill: 'Server-Side Programming',
            },
            children: [
                {
                    name: 'Node.js',
                    attributes: {
                        Description: 'JavaScript Runtime for Server-Side',
                    },
                    children: [
                        {
                            name: 'Express.js',
                            attributes: {
                                Description: 'Web Application Framework',
                            },
                            children: [
                                {
                                    name: 'Routing',
                                },
                                {
                                    name: 'Middleware',
                                },
                                    {
                                    name: 'Error Handling',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Databases',
                    attributes: {
                        Description: 'Data Storage Solutions',
                    },
                    children: [
                        {
                            name: 'SQL Databases',
                            attributes: {
                                Description: 'Relational Databases',
                            },
                            children: [
                                {
                                    name: 'PostgreSQL',
                                },
                                {
                                    name: 'MySQL',
                                },
                            ],
                        },
                        {
                            name: 'NoSQL Databases',
                            attributes: {
                                Description: 'Non-Relational Databases',
                            },
                            children: [
                                {
                                    name: 'MongoDB',
                                },
                                {
                                    name: 'Redis',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: 'Version Control',
            attributes: {
                Skill: 'Managing Code Versions',
            },
            children: [
                {
                    name: 'Git',
                    attributes: {
                        Description: 'Distributed Version Control System',
                    },
                    children: [
                        {
                            name: 'Basic Commands',
                        },
                        {
                            name: 'Branching and Merging',
                        },
                        {
                            name: 'GitHub/GitLab/Bitbucket',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Deployment and DevOps',
            attributes: {
                Skill: 'Deploying and Managing Applications',
            },
            children: [
                {
                    name: 'Deployment',
                    attributes: {
                        Description: 'Releasing Applications to Production',
                    },
                    children: [
                        {
                            name: 'Heroku',
                        },
                        {
                            name: 'AWS',
                        },
                        {
                            name: 'Docker',
                        },
                    ],
                },
                {
                    name: 'CI/CD',
                    attributes: {
                        Description: 'Continuous Integration and Delivery',
                    },
                    children: [
                        {
                            name: 'Jenkins',
                        },
                        {
                            name: 'GitHub Actions',
                        },
                        {
                            name: 'CircleCI',
                        },
                    ],
                },
            ],
        },
    ],
};
export const MOBILEAPPDEVELOPMENT = {
    name: 'Mobile App Development',
    children: [
        {
            name: 'iOS Development',
            attributes: {
                Skill: 'Developing apps for iOS devices',
            },
            children: [
                {
                    name: 'Swift',
                    attributes: {
                        Description: 'Programming language for iOS development',
                    },
                    children: [
                        {
                            name: 'Basic Syntax',
                        },
                        {
                            name: 'UIKit',
                        },
                        {
                            name: 'SwiftUI',
                        },
                    ],
                },
                {
                    name: 'Xcode',
                    attributes: {
                        Description: 'Integrated development environment (IDE)',
                    },
                    children: [
                        {
                            name: 'Interface Builder',
                        },
                        {
                            name: 'Simulator',
                        },
                        {
                            name: 'Debugging Tools',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Android Development',
            attributes: {
                Skill: 'Developing apps for Android devices',
            },
            children: [
                {
                    name: 'Kotlin',
                    attributes: {
                        Description: 'Programming language for Android development',
                    },
                    children: [
                        {
                            name: 'Basic Syntax',
                        },
                        {
                            name: 'Android Jetpack',
                        },
                        {
                            name: 'Coroutines',
                        },
                    ],
                },
                {
                    name: 'Android Studio',
                    attributes: {
                        Description: 'Integrated development environment (IDE)',
                    },
                    children: [
                        {
                            name: 'Layout Editor',
                        },
                        {
                            name: 'Emulator',
                        },
                        {
                            name: 'Debugging Tools',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Cross-Platform Development',
            attributes: {
                Skill: 'Developing apps that work on both iOS and Android',
            },
            children: [
                {
                    name: 'Flutter',
                    attributes: {
                        Description: 'UI toolkit for natively compiled applications',
                    },
                    children: [
                        {
                            name: 'Dart Programming Language',
                        },
                        {
                            name: 'Widgets',
                        },
                        {
                            name: 'State Management',
                        },
                    ],
                },
                {
                    name: 'React Native',
                    attributes: {
                        Description: 'Framework for building native apps using React',
                    },
                    children: [
                        {
                            name: 'Components',
                        },
                        {
                            name: 'Navigation',
                        },
                        {
                            name: 'Native Modules',
                        },
                    ],
                },
            ],
        },
    ],
};
export const DATASCIENCE = {
    name: 'Data Science',
    children: [
        {
            name: 'Data Collection and Cleaning',
            attributes: {
                Skill: 'Acquiring and preparing data for analysis',
            },
            children: [
                {
                    name: 'Web Scraping',
                    attributes: {
                        Description: 'Extracting data from websites',
                    },
                    children: [
                        {
                            name: 'BeautifulSoup',
                        },
                        {
                            name: 'Scrapy',
                        },
                    ],
                },
                {
                    name: 'Data Cleaning',
                    attributes: {
                        Description: 'Handling missing and inconsistent data',
                    },
                    children: [
                        {
                            name: 'Pandas',
                        },
                        {
                            name: 'Numpy',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Data Analysis',
            attributes: {
                Skill: 'Analyzing and interpreting data',
            },
            children: [
                {
                    name: 'Statistical Analysis',
                    attributes: {
                        Description: 'Applying statistical methods to data',
                    },
                    children: [
                        {
                            name: 'Hypothesis Testing',
                        },
                        {
                            name: 'Regression Analysis',
                        },
                    ],
                },
                {
                    name: 'Exploratory Data Analysis (EDA)',
                    attributes: {
                        Description: 'Visualizing and summarizing data',
                    },
                    children: [
                        {
                            name: 'Matplotlib',
                        },
                        {
                            name: 'Seaborn',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Machine Learning',
            attributes: {
                Skill: 'Building predictive models',
            },
            children: [
                {
                    name: 'Supervised Learning',
                    attributes: {
                        Description: 'Training models with labeled data',
                    },
                    children: [
                        {
                            name: 'Linear Regression',
                        },
                        {
                            name: 'Classification',
                        },
                    ],
                },
                {
                    name: 'Unsupervised Learning',
                    attributes: {
                        Description: 'Training models with unlabeled data',
                    },
                    children: [
                        {
                            name: 'Clustering',
                        },
                        {
                            name: 'Dimensionality Reduction',
                        },
                    ],
                },
            ],
        },
    ],
};
export const MACHINELEARNING = {
    name: 'Machine Learning',
    children: [
        {
            name: 'Supervised Learning',
            attributes: {
                Skill: 'Learning from labeled data',
            },
            children: [
                {
                    name: 'Regression',
                    attributes: {
                        Description: 'Predicting continuous values',
                    },
                    children: [
                        {
                            name: 'Linear Regression',
                        },
                        {
                            name: 'Polynomial Regression',
                        },
                    ],
                },
                {
                    name: 'Classification',
                    attributes: {
                        Description: 'Predicting discrete labels',
                    },
                    children: [
                        {
                            name: 'Logistic Regression',
                        },
                        {
                            name: 'Support Vector Machines (SVM)',
                        },
                        {
                            name: 'Decision Trees',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Unsupervised Learning',
            attributes: {
                Skill: 'Finding hidden patterns in unlabeled data',
            },
            children: [
                {
                    name: 'Clustering',
                    attributes: {
                        Description: 'Grouping similar data points',
                    },
                    children: [
                        {
                            name: 'K-Means',
                        },
                        {
                            name: 'Hierarchical Clustering',
                        },
                    ],
                },
                {
                    name: 'Dimensionality Reduction',
                    attributes: {
                        Description: 'Reducing the number of features',
                    },
                    children: [
                        {
                            name: 'Principal Component Analysis (PCA)',
                        },
                        {
                            name: 't-SNE',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Reinforcement Learning',
            attributes: {
                Skill: 'Learning through rewards and punishments',
            },
            children: [
                {
                    name: 'Q-Learning',
                },
                {
                    name: 'Deep Q Networks (DQN)',
                },
            ],
        },
    ],
};
export const ARTIFICIALINTELLIGENCE = {
    name: 'Artificial Intelligence',
    children: [
        {
            name: 'Natural Language Processing (NLP)',
            attributes: {
                Skill: 'Processing and analyzing human language',
            },
            children: [
                {
                    name: 'Text Preprocessing',
                    attributes: {
                        Description: 'Preparing text data for analysis',
                    },
                    children: [
                        {
                            name: 'Tokenization',
                        },
                        {
                            name: 'Stop Words Removal',
                        },
                    ],
                },
                {
                    name: 'Language Models',
                    attributes: {
                        Description: 'Models for understanding and generating text',
                    },
                    children: [
                        {
                            name: 'Transformers',
                        },
                        {
                            name: 'BERT',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Computer Vision',
            attributes: {
                Skill: 'Enabling computers to interpret visual data',
            },
            children: [
                {
                    name: 'Image Classification',
                    attributes: {
                        Description: 'Classifying images into categories',
                    },
                    children: [
                        {
                            name: 'Convolutional Neural Networks (CNN)',
                        },
                        {
                            name: 'Transfer Learning',
                        },
                    ],
                },
                {
                    name: 'Object Detection',
                    attributes: {
                        Description: 'Identifying and locating objects in images',
                    },
                    children: [
                        {
                            name: 'YOLO',
                        },
                        {
                            name: 'Faster R-CNN',
                        },
                    ],
                },
            ],
        },
    ],
};
export const COMPUTERFUNDAMENTALS = {
    name: 'Computer Fundamentals',
    children: [
        {
            name: 'Operating Systems (OS)',
            attributes: {
                Skill: 'Understanding core OS concepts',
            },
            children: [
                {
                    name: 'Processes and Threads',
                    attributes: {
                        Description: 'Concepts of multitasking and concurrency',
                    },
                },
                {
                    name: 'Memory Management',
                    attributes: {
                        Description: 'Handling memory allocation and paging',
                    },
                },
                {
                    name: 'File Systems',
                    attributes: {
                        Description: 'Understanding how files are stored and retrieved',
                    },
                },
                {
                    name: 'Synchronization',
                    attributes: {
                        Description: 'Handling race conditions with locks and semaphores',
                    },
                },
            ],
        },
        {
            name: 'System Design',
            attributes: {
                Skill: 'Building scalable systems',
            },
            children: [
                {
                    name: 'Load Balancing',
                    attributes: {
                        Description: 'Distributing traffic across multiple servers',
                    },
                },
                {
                    name: 'Caching',
                    attributes: {
                        Description: 'Storing data for faster retrieval',
                    },
                },
                {
                    name: 'Databases',
                    attributes: {
                        Description: 'Choosing between SQL, NoSQL for data storage',
                    },
                },
                {
                    name: 'Microservices',
                    attributes: {
                        Description: 'Decoupling services for scalability',
                    },
                },
            ],
        },
        {
            name: 'Data Structures and Algorithms (DSA)',
            attributes: {
                Skill: 'Efficient problem-solving with data structures',
            },
            children: [
                {
                    name: 'Arrays and Linked Lists',
                    attributes: {
                        Description: 'Basic storage structures',
                    },
                },
                {
                    name: 'Trees and Graphs',
                    attributes: {
                        Description: 'Hierarchical and networked data models',
                    },
                },
                {
                    name: 'Sorting and Searching',
                    attributes: {
                        Description: 'Efficient algorithms like quicksort, binary search',
                    },
                },
                {
                    name: 'Dynamic Programming',
                    attributes: {
                        Description: 'Optimizing recursive problems',
                    },
                },
            ],
        },
        {
            name: 'Computer Networks',
            attributes: {
                Skill: 'Understanding communication protocols',
            },
            children: [
                {
                    name: 'OSI Model',
                    attributes: {
                        Description: 'Layered networking architecture',
                    },
                },
                {
                    name: 'TCP/IP',
                    attributes: {
                        Description: 'Core protocol of the internet',
                    },
                },
                {
                    name: 'DNS',
                    attributes: {
                        Description: 'Domain name system and IP resolution',
                    },
                },
                {
                    name: 'HTTP/HTTPS',
                    attributes: {
                        Description: 'Protocols for web communication',
                    },
                },
            ],
        },
    ],
};
