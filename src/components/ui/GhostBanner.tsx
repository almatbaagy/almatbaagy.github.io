import { BirdMark } from './BirdMark';

export const GhostBanner = () => (
    <div className="bg-tb-ember/15 border border-tb-ember/30 rounded-xl px-4 py-3.5
                  flex items-center gap-3 mb-6">
        <BirdMark className="w-9 flex-shrink-0" />
        <div>
            <p className="font-sans text-sm font-medium text-tb-forest-ink">
                Sample Data — Connect your QR code to see real insights
            </p>
            <p className="font-sans text-[11px] text-tb-forest-ink/50 mt-0.5">
                This is what your TableBird dashboard will look like once reviews start coming in.
            </p>
        </div>
    </div>
);
