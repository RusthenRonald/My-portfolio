import {useTranslation} from 'react-i18next';

export default function PhotoFrame() {
    const {t} = useTranslation();

    return (
        <div className="flex" justify-center color="blue">
            <div className="relative w-[280px] h-[340px] md:w-[300px] md:h-[360px]">
                <div
                className="absolute inset-0 rounded-3xl"
                style={{
                    boxShadow: '0 0 0 2px var(--color-accent), 0 0 0 8px color-mix(in srgb, var(--color-accent) 15%, transparent)',
                }}
                />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[var(--color-accent)]"
                style={{ boxShadow: '0 20px 50px -20px rgba(0,0,0,0.7)' }}
                >
                
                    <img src="/rusthen_professional_photo_ofc.png" alt="Rusthen Ronald" className="w-full h-full object-cover" />
                
                <div
                    className="w-full h-full flex flex-col items-center justify-center gap-3
                    text-[var(--color-muted)] font-mono text-xs tracking-widest text-center px-5"
                    style={{
                    background: 'repeating-linear-gradient(135deg, var(--color-surface) 0px, var(--color-surface) 12px, var(--color-surface2) 12px, var(--color-surface2) 24px)',
                    }}
                >
                    <div
                    className="w-12 h-12 rounded-full border-2 border-dashed border-[var(--color-accent)]
                        flex items-center justify-center text-[var(--color-accent)] text-2xl"
                    >
                    +
                    </div>
                    <span>{t('hero.photo')}</span>
                </div>

                {/* name badge */}
                <div
                    className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full
                    font-mono text-[11px] font-bold tracking-wide text-white"
                    style={{ background: 'var(--color-magenta)' }}
                >
                    {t('hero.badge')}
                </div>
                </div>

                {/* decorative corner dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[var(--color-accent)] opacity-60" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-[var(--color-magenta)] opacity-60" />
            </div>
        </div>
    )
}