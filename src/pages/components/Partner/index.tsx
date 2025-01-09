import React from 'react'

const Partners = () => {

    const tools = [
        { text: 'RightAI Tools Directory', href: 'https://right-ai.com/', title: 'RightAI Tools Directory' },
        { text: 'Creati.ai AI Tools Directory', href: 'https://creati.ai', title: 'Creati.ai AI Tools Directory' },
        { text: 'The latest AI Tools Directory', href: 'https://hiaitools.com', title: 'The latest AI Tools Directory' },
        { text: 'AIStage', href: 'https://aistage.net', title: 'AIStage' },
        { text: 'Sprunked', href: 'https://sprunked.dev/', title: 'Sprunked' },
        { text: 'YP for AI', href: 'https://ypforai.com', title: 'YP for AI Tools Directory' },
        { text: 'AIMonstr', href: 'https://www.aimonstr.com', title: 'AIMonstr' },
        { text: 'AI NavHub Tools Directory', href: 'https://www.ainavhub.com/', title: 'AI NavHub Tools Directory' },
        { text: 'AI Nav Site', href: 'https://navs.site', title: 'Best and Latest AI Navigation Website in 2024' },
        { text: 'SeekAIs', href: 'https://SeekAIs.com/', title: 'SeekAIs - AI Tools Directory' },
        { text: 'AIToolly', href: 'https://AIToolly.com/', title: 'AIToolly AI Tools Directory' },
        { text: 'MagicBox.Tools - AI Tools Diresctory', href: 'https://magicbox.tools/', title: 'MagicBox.Tools - AI Tools Diresctory' },
        { text: 'All in AI Tools', href: 'https://allinai.tools', title: 'The Best AI Tools' },
        { text: 'Viesearch - The Human-curated Search Engine', href: 'https://viesearch.com/', title: 'Viesearch - The Human-curated Search Engine' },
        { text: 'AI Tools Directory', href: 'https://gpt4oo.com/', title: 'AI Tools Directory' },
        { text: 'AI Findr Tools Directory', href: 'https://ai-findr.com/', title: 'AI Findr Tools Directory' },
        { text: 'Gen AI Prism Tools Directory', href: 'https://genaiprism.site/', title: 'Gen AI Prism Tools Directory' },
        { text: 'AI Tools Explorer', href: 'https://aitoolsexplorer.org/', title: 'AI Tools Explorer' },
        { text: '猫猫鱼 Top4 AI工具窝', href: 'https://top4ai.com', title: '猫猫鱼 Top4 AI工具窝' },
        { text: 'RightAI Tools Directory', href: 'https://right-ai.com/', title: 'RightAI Tools Directory' },
        { text: 'ToolsApp AI Tools Diresctory', href: 'https://toolsapp.cc/', title: 'ToolsApp AI Tools Diresctory' },
        { text: 'What Is Ai Tools', href: 'https://whatisaitools.com/', title: 'What Is Ai Tools' },
        { text: 'SeekTop.ai', href: 'https://seektop.ai', title: 'SeekTop AI Tools Directory' },
        { text: 'Smart AI Tools Directory', href: 'https://smartaitools.run/', title: 'Smart AI Tools Directory' },
        { text: 'AI Tool Trek', href: 'https://aitooltrek.com', title: 'AI Tool Trek' },
        { text: 'See What New AI', href: 'https://www.seewhatnewai.com', title: 'See What New AI' },
        { text: 'ai-toolify', href: 'https://ai-toolify.com/', title: 'ai-toolify' },
        { text: 'Human With AI Tools Directory', href: 'https://humanwithai.top/', title: 'Human With AI Tools Directory' },
        { text: 'AI Navigation Site Tools Directory', href: 'https://ainavigationsite.com/', title: 'AI Navigation Site Tools Directory' },
        { text: 'Based Tools AI', href: 'https://www.basedtools.ai/', title: 'Based Tools AI' },
        { text: 'AI Tools Directory', href: 'https://tools-ai.xyz/', title: 'AI Tools Diresctory' },
        { text: 'Tally So', href: 'https://tally.so', title: 'Tally So' },
        { text: 'AI Best Tools', href: 'https://aibest.tools/', title: 'AI Best Tools' },
        { text: 'AI Navigation', href: 'https://www.ai-navigation.net/', title: 'AI Navigation' },
        { text: 'T0 AI Tools Directory', href: 'https://t0ai.com', title: 'T0 AI Tools Directory' },
        { text: 'iuu AI', href: 'https://iuu.ai/', title: 'iuu AI' },
        { text: 'Fun AI', href: 'https://funai.online/', title: 'Fun AI' },
        { text: 'AI Tools for Best', href: 'https://aitoolsforbest.com', title: 'AI Tools for Best' },
        { text: 'AI Just Works', href: 'https://aijustworks.com', title: 'AI Just Works' },
        { text: 'AI Nav Site', href: 'https://navs.site', title: 'AI Nav Site' },
        { text: 'AI Hub Tools', href: 'https://www.ai-hub.tools/', title: 'AI Hub Tools' },

    ]

    return (
        <div 
            className="font-sans border-t border-white/10 max-w-7xl mx-auto px-8 hidden"
            style={{ 
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                border: '0'
            }}
            aria-hidden="true"
        >
            {
                tools.length > 0 && (
                    <h6 className="font-semibold text-xl text-center my-4">
                        <p className="hover:underline">Partners</p>
                    </h6>
                )
            }
            <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                    <a key={index}
                        href={tool.href}
                        rel="nofollow"
                        className="px-2 py-1 rounded shadow hover:shadow-md transition-shadow text-gray-400 duration-200 text-sm">
                        {tool.text}
                    </a>
                ))}
            </div>
            <div className="mt-4 flex space-x-2">
                <div className="text-slate-300  py-1 rounded text-sm">
                    <a href="https://dang.ai/" target="_blank" ><img src="https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png" alt="Dang.ai" style={{ width: '150px', height: '54px' }} width="150" height="54" /></a>
                </div>
                {/* <div className="py-1 rounded text-sm flex items-center">
                    <span className="text-blue-600 mr-1">△</span>
                    <a href="https://www.aitoolnet.com/" target="_blank"><img src="https://www.aitoolnet.com/static/assets/images/logo.svg" alt="aitoolnet.com" style={{ width: '150px', height: '52px' }} width="150" height="52" /></a>
                </div> */}
                <div className="py-1 rounded text-sm flex items-center">
                    <a href="https://www.toolpilot.ai/" target="_blank"><img src="https://www.toolpilot.ai/cdn/shop/files/f-b_690x151_crop_center.png?v=1695882701" alt="toolpilot.ai" style={{ width: '150px', height: '52px' }} width="150" height="52" /></a>
                </div>
            </div>
        </div>
    )
}

export default Partners