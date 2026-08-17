import { useState } from 'react';
import { Play, Youtube, Sparkles, Flame, Info, ExternalLink } from 'lucide-react';
import { STORY_VIDEO_CONFIG, EXTERNAL_LINKS } from '../data/restaurantConfig';

export function StorySection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="story" className="py-20 bg-[#FBF7F0] relative overflow-hidden border-b border-[#E6DACB]">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B84E1A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4ECE1] border border-[#DFCDB9] text-[#7C695A] text-xs font-semibold uppercase tracking-widest mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B84E1A]" />
            <span>Cinematic Feature</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2D231C] tracking-wide">
            {STORY_VIDEO_CONFIG.title}
          </h2>

          <p className="text-base sm:text-lg text-[#B84E1A] font-medium mt-2">
            {STORY_VIDEO_CONFIG.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-[#6B594C] mt-2 max-w-lg mx-auto leading-relaxed">
            Watch how our master cooks preserve the time-honoured Champaran Handi technique with dough-sealed earthen pots, natural charcoal embers, and stone-ground spices.
          </p>
        </div>

        {/* Video Player / Illustrated Showcase Frame */}
        <div className="relative rounded-3xl bg-[#FFFFFF] border-2 border-[#DFCDB9] shadow-[0_16px_40px_rgba(74,55,40,0.12)] overflow-hidden aspect-video max-w-4xl mx-auto group">
          {isPlaying ? (
            <iframe
              id="story-video-iframe"
              src={`${STORY_VIDEO_CONFIG.embedUrl}?autoplay=1&rel=0`}
              title="Champaran Meat House Story Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full">
              {/* Hand-painted Thumbnail Image */}
              <img
                src={STORY_VIDEO_CONFIG.thumbnailImage}
                alt="Champaran Meat House Kitchen Story Thumbnail"
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Vignette & Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D231C]/90 via-[#2D231C]/30 to-transparent" />

              {/* Play Button Trigger */}
              <button
                id="story-play-btn"
                onClick={() => setIsPlaying(true)}
                aria-label="Play Story Video"
                className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#B84E1A]/90 hover:bg-[#9C3D0E] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(184,78,26,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-sm border-2 border-[#FFF9F2]/70"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white ml-1.5" />
              </button>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#FAF5ED]/95 border border-[#DFCDB9] rounded-2xl p-3.5 sm:p-4 backdrop-blur-md shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4ECE1] border border-[#DFCDB9] flex items-center justify-center text-[#B84E1A] shrink-0">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#2D231C]">
                      The Craft of Ahuna Meat
                    </h4>
                    <p className="text-[11px] text-[#6B594C]">
                      Original video feature from the restaurant kitchen
                    </p>
                  </div>
                </div>

                <a
                  id="story-youtube-channel-link"
                  href={EXTERNAL_LINKS.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#FFFFFF] hover:bg-[#F4ECE1] border border-[#DFCDB9] text-[#B84E1A] text-xs font-semibold transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <Youtube className="w-4 h-4 text-[#DC2626]" />
                  <span>Visit YouTube Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Video Note */}
        <div className="mt-4 text-center text-xs text-[#8A7565] flex items-center justify-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#B84E1A]" />
          <span>Official story video provided via YouTube. Discover the real culinary journey.</span>
        </div>
      </div>
    </section>
  );
}
