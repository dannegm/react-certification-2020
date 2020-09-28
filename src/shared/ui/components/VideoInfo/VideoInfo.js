import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RichText from '../RichText';

import {
    ChevronUpOutlineIcon,
    HeartIcon,
    MessageSquareIcon,
    // StarIcon,
    StarOutlineIcon,
} from '@ui/icons';

import { abbreviatedThousands } from '@/shared/utils/filters';

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

const InfoAction = ({ icon, label }) => {
    return (
        <InfoActionWrapper>
            <InfoActionIcon>{icon}</InfoActionIcon>
            {!!label && <InfoActionLabel>{label}</InfoActionLabel>}
        </InfoActionWrapper>
    );
};

const VideoInfo = ({ title, description, views, likes, comments }) => {
    const [expanded, setExpanded] = useState(false);

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

                <InfoAction icon={<StarOutlineIcon />} />
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
};

VideoInfo.defaultProps = {
    // TODO: defaultProps
};

export default VideoInfo;
