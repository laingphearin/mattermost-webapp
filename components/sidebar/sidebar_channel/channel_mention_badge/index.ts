// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {GlobalState} from 'mattermost-redux/types/store';
import {GenericAction} from 'mattermost-redux/types/actions';

import ChannelMentionBadge from './channel_mention_badge';

type OwnProps = {
    channelId: string;
}

function mapStateToProps(state: GlobalState, ownProps: OwnProps) {
    return {
    };
}

function mapDispatchToProps(dispatch: Dispatch<GenericAction>) {
    return {
        actions: bindActionCreators({
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelMentionBadge);