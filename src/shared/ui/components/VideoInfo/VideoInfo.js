import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useFavs } from '@/shared/providers/FavsProvider';

import {
    ChevronUpOutlineIcon,
    HeartIcon,
    MessageSquareIcon,
    StarIcon,
    StarOutlineIcon,
} from '@ui/icons';

import { abbreviatedThousands } from '@/shared/utils/filters';

import RichText from '../RichText';

import {
    Separator,
    InfoWrapper,
    InfoHeader,
    InfoTitle,
    InfoExpand,
    InfoViews,
    InfoContent,
    InfoDescription,
    InfoActions,
    InfoActionWrapper,
    InfoActionIcon,
    InfoActionLabel,
} from './VideoInfo.styled';

const InfoAction = ({ icon, label, ...props }) => {
    return (
        <InfoActionWrapper {...props}>
            <InfoActionIcon>{icon}</InfoActionIcon>
            {!!label && <InfoActionLabel>{label}</InfoActionLabel>}
        </InfoActionWrapper>
    );
};

const VideoInfo = ({
    title,
    description,
    views,
    likes,
    comments,
    videoSchema,
}) => {
    const { save, remove, inList } = useFavs();

    const [saved, setSaved] = useState(inList(videoSchema.id));

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setSaved(inList(videoSchema.id));
    }, [videoSchema]);

    const handleSave = () => {
        if (saved) {
            remove(videoSchema.id);
            setSaved(false);
        } else {
            save(videoSchema);
            setSaved(true);
        }
    };

    const savedIcon = saved ? <StarIcon /> : <StarOutlineIcon />;

    return (
        <InfoWrapper>
            <InfoHeader>
                <InfoTitle>{title}</InfoTitle>
                <InfoExpand
                    expanded={expanded}
                    onClick={() => setExpanded((state) => !state)}
                >
                    <ChevronUpOutlineIcon />
                </InfoExpand>
            </InfoHeader>

            <InfoViews>{abbreviatedThousands(views)} views</InfoViews>

            <InfoContent expanded={expanded}>
                <InfoDescription>
                    <RichText>{description}</RichText>
                </InfoDescription>
            </InfoContent>

            <InfoActions>
                <InfoAction
                    icon={<HeartIcon />}
                    label={abbreviatedThousands(likes)}
                />
                <InfoAction
                    icon={<MessageSquareIcon />}
                    label={abbreviatedThousands(comments)}
                />

                <Separator />

                <InfoAction onClick={handleSave} icon={savedIcon} />
            </InfoActions>
        </InfoWrapper>
    );
};

VideoInfo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    videoSchema: PropTypes.object.isRequired,
};

VideoInfo.defaultProps = {
    // TODO: defaultProps
};

export default VideoInfo;
